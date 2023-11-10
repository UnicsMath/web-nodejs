<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<section>
    <div>
        <h1>{data.content.title}</h1>
        <p>{data.content.text}</p>
    </div>
    <h3>Course content</h3>
    <ol>
        {#each data.content.contents as content}
            <li>
                <p>{content}</p>
            </li>
        {/each}
    </ol>
    {#each data.content.contents as content}
        <h3>{content}</h3>
        {#if content === 'Whole Numbers' }
            <strong>What is the difference between counting numbers and whole numbers?</strong>
            <h4>Exercises</h4>
            <p></p>
        {/if}
    {/each}
</section>

<style lang="scss">
  ol,
  div p {
    padding-bottom: 90px;
  }
  h1 {
    padding-bottom: 3px;
  }
  ol {
    display: inline-block;
    text-align: start;
  }
  li {
    list-style: decimal;
    padding-left: 2px;
    p {
      line-height: 28px;
    }
  }
</style>
