
export default function Project(props) {
  return (
    <div className="max-w-sm md:w-1/3 lg:1/2 w-full rounded-lg border shadow-md overflow-hidden">
      <div className="relative overflow-hidden group">
        <img
          alt={props.title}
          className="object-cover w-full h-48 transition-transform group-hover:scale-105"
          height={200}
          src={props.image}
          style={{
            aspectRatio: "400/200",
            objectFit: "cover",
          }}
          width={400}
        />
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-base leading-none">{props.title}</h4>
        <p className="text-sm leading-relaxed mt-2.5 mb-3.5 text-gray-500">
          {props.description}
        </p>
        <a onClick={() => window.open(props.link)} className="text-sm font-medium underline">
          View Details
        </a>
      </div>
    </div>
  )
}

