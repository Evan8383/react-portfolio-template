export default function Resume() {
  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="p-4 md:p-6">
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <div className="text-2xl font-semibold leading-none">Evan Bennett</div>
            <div className="text-sm text-gray-500">Web Developer</div>
          </div>
        </div>
        <div className="border-t border-gray-200 border-dashed my-6" />
        <div className="space-y-4">
          <div className="space-y-1">
            <div className="text-sm font-medium leading-none">Education</div>
            <div className="text-sm text-gray-500">Full stack develope bootcamp</div>
            <div className="text-sm text-gray-500">UCONN</div>
            <div className="text-sm text-gray-500">2023 - 2024</div>
          </div>
          <div className="space-y-1">
            <div className="text-sm font-medium leading-none">Work Experience</div>
            <div className="text-sm text-gray-500">IT Support Tech</div>
            <div className="text-sm text-gray-500">Example, Inc.</div>
            <div className="text-sm text-gray-500">2022 - Present</div>
            <ul className="list-disc list-inside ml-4 grid gap-2 py-2">
              <li>Engineer network infrastructures.</li>
              <li>Support and maintain end user systems.</li>
            </ul>
          </div>
          <div className="space-y-1">
            <div className="text-sm font-medium leading-none">Skills</div>
            <ul className="list-disc list-inside ml-4 grid gap-2 py-2">
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Mongo DB/ Mongoose</li>
              <li>SQL/ Sequelize</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-end p-4 md:p-6">
        <a
          className="inline-flex h-8 items-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-sm font-medium shadow-sm gap-1.5"
          href="src/assets/Resume.png"
          download="EvanBennettResume.png"

        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          </svg>
          Download Resume
        </a>
      </div>
    </div>
  )
}