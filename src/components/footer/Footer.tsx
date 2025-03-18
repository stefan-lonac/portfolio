function Footer() {
  const currentYear = new Date().getFullYear()
  const socialInfo = [
    {
      link: 'https://github.com/stefan-lonac',
      text: 'GitHub',
    },
    {
      link: 'https://www.linkedin.com/in/stefan-loncaric/',
      text: 'LinkedIn',
    },
    {
      link: 'mailto:loncaric.stefan@gmail.com',
      text: 'Email',
    },
  ]

  return (
    <footer className="flex flex-col items-center gap-3 py-5 bg-gray-100 dark:bg-gray-900">
      <p className="text-gray-800 dark:text-stone-50">
        @ {currentYear} Stefan Lončarić. All rights reserved.
      </p>
      <div className="flex gap-4">
        {socialInfo.map((socialInfo) => {
          return (
            <a
              key={socialInfo.text}
              href={socialInfo.link}
              target="_blank"
              className="hover:text-cyan-500 dark:hover:text-cyan-500 text-gray-800 dark:text-stone-50"
            >
              {socialInfo.text}
            </a>
          )
        })}
      </div>
    </footer>
  )
}

export default Footer
