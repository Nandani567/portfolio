const Contact = () => {
  return (
    <div className="text-center max-w-2xl mx-auto">

      <h2 className="text-4xl font-bold mb-6 text-white">
        Let’s Connect
      </h2>

      <p className="text-gray-400 mb-10">
        If you’re serious about building something meaningful, let’s talk.
      </p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">

        {/* Email */}
        <a
          href="mailto:bansalnandani620@gmail.com"
          className="
            px-6 py-3 rounded-lg
            bg-pink-500/10 text-pink-400
            hover:bg-pink-500/20
            transition
          "
        >
          Email Me →
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Nandani567"
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-6 py-3 rounded-lg
            border border-white/20
            hover:bg-white/10
            transition
          "
        >
          GitHub
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/nandani-bansal-741920249/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-6 py-3 rounded-lg
            border border-white/20
            hover:bg-white/10
            transition
          "
        >
          LinkedIn
        </a>

      </div>
    </div>
  );
};

export default Contact;