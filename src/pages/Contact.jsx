import React, { useState } from "react";
import { Button } from "../components/Button";
import { Linkedin, Github, Mail, Phone, Send, MapPin } from "lucide-react";

export function Contact() {
  const [formDataState, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [result, setResult] = useState(""); // <-- new

  const handleChange = (e) => {
    setFormData({
      ...formDataState,
      [e.target.name]: e.target.value,
    });
  };

  // <-- new async submit handler using web3forms
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const form = event.target;
    const formData = new FormData(form);

    // prefer storing your key in an env var. See notes below.
    const ACCESS_KEY =
      import.meta.env.VITE_WEB3FORMS_KEY || "4fb6ed7a-c1f8-4d5d-ab45-70e21475bd29";

    formData.append("access_key", ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form submitted successfully ✅");
        setIsSubmitted(true);
        // clear form UI
        setFormData({ name: "", email: "", message: "" });
        form.reset();

        // hide success after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setResult("");
        }, 3000);
      } else {
        setResult(data.message || "Submission failed. Try again.");
        console.error("Web3Forms error:", data);
      }
    } catch (error) {
      console.error("Network error:", error);
      setResult("Network error. Please try again later.");
    }
  };

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full">
              Get In Touch
            </span>
          </div>
          <h1 className="mb-4 text-slate-900">Contact Me</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Have a project, question, or opportunity? Send me a message below and
            I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="mb-6 text-slate-900">Send a Message</h2>

              {/* Result / feedback */}
              {result && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    isSubmitted
                      ? "bg-green-50 border border-green-200 text-green-700"
                      : "bg-yellow-50 border border-yellow-200 text-yellow-700"
                  }`}
                >
                  {result}
                </div>
              )}

              <form onSubmit={onSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 text-slate-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formDataState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition"
                    placeholder="Ancho Haus"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-slate-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formDataState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition"
                    placeholder="huncho@gmail.com"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-slate-700"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formDataState.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <Button variant="primary" className="w-full justify-center">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
              <span>{result}</span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="mb-6 text-slate-900">Connect With Me</h3>

              <div className="space-y-4">
                {/* <a
                  href="mailto:vincent.parkolwa@example.com"
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors group"
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="text-slate-700 group-hover:text-indigo-600">
                      vincentmoriancho@gmail.com
                    </p>
                  </div>
                </a> */}

                <a
                  href="http://www.linkedin.com/in/vincent-parkolwa-770534301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors group"
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">LinkedIn</p>
                    <p className="text-slate-700 group-hover:text-indigo-600">
                      Connect on LinkedIn
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/Huncho2030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors group"
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">GitHub</p>
                    <p className="text-slate-700 group-hover:text-indigo-600">
                      View My Code
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/254712376198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors group"
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">WhatsApp</p>
                    <p className="text-slate-700 group-hover:text-indigo-600">
                      Message on WhatsApp
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="mb-1">Location</h4>
                  <p className="opacity-90">Kenya</p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/20">
                <p className="text-sm opacity-90">
                  Available for freelance projects, full-time positions, and
                  consulting opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
