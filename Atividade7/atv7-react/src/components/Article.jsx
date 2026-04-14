function Article({ post }) {
  return (
    <article>
      <h2>{post.titulo}</h2>

      <time>{post.data}</time>

      {post.conteudo.map((p, index) => (
        <p key={index}>{p}</p>
      ))}

      <figure>
        <img src={post.imagem} alt="Praia paradisíaca" />
        <figcaption>{post.legenda}</figcaption>
      </figure>
    </article>
  )
}

export default Article