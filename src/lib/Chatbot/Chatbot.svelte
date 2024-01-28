<script lang="ts">
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-nocheck
	import { HttpTransportType, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
	import { crossfade, fly } from 'svelte/transition';
	import { backInOut } from 'svelte/easing';

	type MessagePayload = {
		senderId: string;
		message: string;
	};

	let messagePayloads: MessagePayload[] = [
		{ senderId: 'Chatbot', message: 'Hello, how can I help you' }
	];

	let message: string = ``;

	const connection = new HubConnectionBuilder()
		.withUrl('http://localhost:5118/ChatbotHub', {
			skipNegotiation: true,
			transport: HttpTransportType.WebSockets
		})
		.configureLogging(LogLevel.Information)
		.withAutomaticReconnect()
		.build();

	connection.on('ReceiveMessage', (messagePayload: MessagePayload) => {
		messagePayloads = messagePayloads.concat(messagePayload);
	});

	async function start() {
		try {
			await connection.start();
			console.log('SignalR Connected.');
		} catch (err) {
			console.log(err);
		}
	}

	async function stop() {
		try {
			await connection.stop();
			console.log('SignalR Disconnected.');
		} catch (err) {
			console.log(err);
		}
	}

	function send() {
		messagePayloads = messagePayloads.concat({ senderId: 'You', message });
		try {
			connection.send('SendMessage', message).then(() => (message = ''));
			message = '';
		} catch (err) {
			console.log(err);
		}
	}

	function scrollToBottom(node: HTMLElement) {
		node = document.querySelector<HTMLDivElement>('#Chat>div') || document.createElement('div');
		node.scrollTo(0, node.scrollHeight);
	}

	let showChatBox = false;

	function ShowChatBox() {
		showChatBox = true;
		start();
	}

	function CloseChatBox() {
		showChatBox = false;
		stop();
	}

	function clickOutside(node: HTMLElement) {
		const handleClick = (event: MouseEvent) => {
			if (!node.contains(event.target as Node)) {
				node.dispatchEvent(new CustomEvent('outclick'));
			}
		};

		document.addEventListener('click', handleClick, true);
	}

	const [outbound, inbound] = crossfade({
		duration: 400,
		easing: backInOut
	});

	const chatboxKey = 1;
</script>

{#if showChatBox}
	<div
		id="Chat"
		use:clickOutside
		on:outclick={CloseChatBox}
		in:outbound={{ key: chatboxKey }}
		out:inbound={{ key: chatboxKey }}
	>
		<div>
			{#each messagePayloads as messagePayload}
				<div
					class="row {messagePayload.senderId}"
					use:scrollToBottom
					in:fly={{ y: 25, duration: 200 }}
				>
					<p>{messagePayload.senderId}: {messagePayload.message}</p>
				</div>
			{/each}
		</div>
		<form>
			<input bind:value={message} placeholder="Message Chatbot..." />
			<button on:click={send} disabled={!message}>Send</button>
		</form>
	</div>
{:else}
	<button
		class="ChatbotButton"
		on:click={ShowChatBox}
		in:outbound={{ key: chatboxKey }}
		out:inbound={{ key: chatboxKey }}
	>
		🤖
	</button>
{/if}

<style lang="scss">
	.ChatbotButton {
		background-color: white;
		border-radius: 50px;
		width: 45px;
		height: 45px;

		position: absolute;
		bottom: 2rem;
		right: 10rem;
	}

	#Chat {
		background-color: white;
		position: absolute;
		bottom: 2rem;
		right: 10rem;
		padding: 1rem;
		border-radius: 25px;

		> div {
			max-height: 200px;
			height: 200px;
			overflow-y: scroll;
			border: 1px solid gray;
			margin-bottom: 8px;
			padding: 5px 10px;
			border-radius: 12.5px;
		}
	}

	form {
		flex-direction: row;
	}

	input {
		width: 100%;
		border-radius: 10px;
	}

	button {
		padding: 0 10px;
		margin-left: 5px;
	}

	.row {
		display: block;
		margin-bottom: 2px;
	}

	p {
		display: inline;
		color: white;
		padding: 6px 7px 8px 9px;
	}

	.Chatbot p {
		background-color: #182229;
		border-radius: 0 7.5px 7.5px 7.5px;
	}

	.You {
		text-align: right;
	}

	.You p {
		background-color: #007cff;
		border-radius: 7.5px 0 7.5px 7.5px;
	}
</style>
