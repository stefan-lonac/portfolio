import Link from 'next/link'

export default function NotFound() {
  return <main className="not-found"><p>404</p><h1>This page is off the map.</h1><Link className="button" href="/">Back to portfolio</Link></main>
}
