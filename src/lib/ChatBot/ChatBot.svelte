<script lang="ts">
	import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

	type MessagePayload = {
		senderId: string;
		message: string;
	};

	let messagePayloads: MessagePayload[] = [
		{ senderId: 'Chatbot', message: 'Hello, how can I help you' }
	];
	let message: string = ``;

	const connection = new HubConnectionBuilder()
		.withUrl('http://localhost:5118/ChatBotHub')
		.configureLogging(LogLevel.Information)
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
			setTimeout(start, 5000);
		}
	}

	connection.onclose(async () => {
		await start();
	});

	start();

	function send() {
		messagePayloads = messagePayloads.concat({ senderId: 'you', message });
		try {
			connection.send('SendMessage', message).then(() => (message = ''));
		} catch (err) {
			console.log(err);
		}
	}
</script>

<div id="Chat">
	<div>
		{#each messagePayloads as messagePayload}
			<div>{messagePayload.senderId}: {messagePayload.message}</div>
		{/each}
	</div>
	<div>
		<label>
			Message:
			<input bind:value={message} placeholder="Message Chatbot..." />
		</label>
		<button on:click={send} disabled={!message}>Send</button>
	</div>
</div>

<style>
	#Chat {
		background-color: white;
	}
</style>
