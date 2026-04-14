function Sidebar({ links }) {
  return (
    <aside>
      <h3>Posts Relacionados:</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar