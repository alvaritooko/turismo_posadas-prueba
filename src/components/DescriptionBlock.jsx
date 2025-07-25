function DescriptionBlock({ title, description, children, className = "" }) {
  return (
    <div className={`section-padding ${className}`}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </div>
  )
}

export default DescriptionBlock 