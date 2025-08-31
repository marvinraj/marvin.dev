
function Navbar() {
  return (
    <div>
      <ul className="flex gap-4 p-2 text-xs">
        <li><a href="/">home</a></li>
        <li><a href="/about">about</a></li>
        <li><a href="/projects">projects</a></li>
        <li><a href="/experience">experience</a></li>
      </ul>
    </div>
  )
}

export default Navbar