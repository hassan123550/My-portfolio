import React from 'react';

const Contact = () => {
    const socialLinks = [
  {
    href: 'https://github.com/hassan123550',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48603 2 2 6.48604 2 12C2 17.514 6.48603 22 12 22C17.514 22 22 17.514 22 12C22 6.48604 17.514 2 12 2ZM12 3.5C16.7033 3.5 20.5 7.2967 20.5 12C20.5 15.8327 17.9785 19.0613 14.5 20.126V17.5684C14.5 16.6133 13.9497 15.7943 13.1543 15.3867C13.9276 15.2388 14.6457 14.9454 15.249 14.5309C15.8522 14.1165 16.3232 13.5929 16.6228 13.0037C16.9224 12.4145 17.0421 11.7765 16.9718 11.1429C16.9015 10.5093 16.6434 9.89818 16.2188 9.36035C16.4405 8.67771 16.6883 7.48034 16.0996 6.53809C14.9647 6.53809 14.2323 7.31604 13.8828 7.7998C13.2853 7.60352 12.6459 7.5017 12 7.5C11.3537 7.50057 10.7136 7.60139 10.1152 7.79688C9.76487 7.31289 9.03311 6.53809 7.90039 6.53809C7.22486 7.61941 7.64246 8.78228 7.86621 9.25684C7.41288 9.79235 7.12862 10.4078 7.03781 11.0505C6.94699 11.6931 7.05233 12.3438 7.34478 12.9468C7.63723 13.5498 8.10809 14.087 8.71698 14.5124C9.32587 14.9379 10.0546 15.2389 10.8408 15.3896C10.1877 15.7262 9.69864 16.337 9.54883 17.0781H8.8916C8.2431 17.0781 7.99112 16.8146 7.64062 16.3701C7.29463 15.9256 6.92259 15.6269 6.47559 15.5029C6.23459 15.4774 6.07223 15.6607 6.28223 15.8232C6.99173 16.3062 7.0407 17.0968 7.3252 17.6143C7.5842 18.0803 8.11484 18.5 8.71484 18.5H9.5V20.126C6.02153 19.0613 3.5 15.8327 3.5 12C3.5 7.2967 7.29669 3.5 12 3.5Z" fill="currentColor" />
    </svg>,
    alt: 'GitHub'
  },
  {
    href: 'https://www.linkedin.com/in/hassan-randhawa',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.75 3C4.24011 3 3 4.24011 3 5.75V18.25C3 19.7599 4.24011 21 5.75 21H18.25C19.7599 21 21 19.7599 21 18.25V5.75C21 4.24011 19.7599 3 18.25 3H5.75ZM5.75 4.5H18.25C18.9491 4.5 19.5 5.05089 19.5 5.75V18.25C19.5 18.9491 18.9491 19.5 18.25 19.5H5.75C5.05089 19.5 4.5 18.9491 4.5 18.25V5.75C4.5 5.05089 5.05089 4.5 5.75 4.5ZM7.75 6.5C7.41848 6.5 7.10054 6.6317 6.86612 6.86612C6.6317 7.10054 6.5 7.41848 6.5 7.75C6.5 8.08152 6.6317 8.39946 6.86612 8.63388C7.10054 8.8683 7.41848 9 7.75 9C8.08152 9 8.39946 8.8683 8.63388 8.63388C8.8683 8.39946 9 8.08152 9 7.75C9 7.41848 8.8683 7.10054 8.63388 6.86612C8.39946 6.6317 8.08152 6.5 7.75 6.5ZM7 10C6.7235 10 6.5 10.2235 6.5 10.5V17C6.5 17.2765 6.7235 17.5 7 17.5H8.5C8.7765 17.5 9 17.2765 9 17V10.5C9 10.2235 8.7765 10 8.5 10H7ZM10.5 10C10.2235 10 10 10.2235 10 10.5V17C10 17.2765 10.2235 17.5 10.5 17.5H12C12.2765 17.5 12.5 17.2765 12.5 17V13.25C12.5 12.5605 13.0605 12 13.75 12C14.4395 12 15 12.5605 15 13.25V17C15 17.2765 15.2235 17.5 15.5 17.5H17C17.2765 17.5 17.5 17.2765 17.5 17V13C17.5 11.3455 16.1545 10 14.5 10C13.731 10 13.0315 10.293 12.5 10.7705V10.5C12.5 10.2235 12.2765 10 12 10H10.5Z" fill="currentColor" />
    </svg>,
    alt: 'LinkedIn'
  },
  {
    href: 'https://x.com/HassanA70781',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.25 3C4.46403 3 3 4.46403 3 6.25V17.75C3 19.536 4.46403 21 6.25 21H17.75C19.536 21 21 19.536 21 17.75V6.25C21 4.46403 19.536 3 17.75 3H6.25ZM6.25 4.5H17.75C18.725 4.5 19.5 5.27497 19.5 6.25V17.75C19.5 18.725 18.725 19.5 17.75 19.5H6.25C5.27497 19.5 4.5 18.725 4.5 17.75V6.25C4.5 5.27497 5.27497 4.5 6.25 4.5ZM6.91406 7L10.7822 12.5283L6.91113 17H7.93262L11.2344 13.1758L13.9102 17H17.1289L13.0127 11.1172L16.5684 7H15.5684L12.5615 10.4717L10.1328 7H6.91406ZM8.46777 7.84766H9.74902L15.5752 16.1523H14.2939L8.46777 7.84766Z" fill="currentColor" />
    </svg>,
    alt: 'Twitter X'
  },
{
  href: 'https://wa.me/923296704691?text=Hi%20Hassan%2C%20I%20am%20interested%20in%20working%20with%20you!',
  icon: (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2.75c-7.292 0-13.25 5.958-13.25 13.25 0 2.338.621 4.62 1.801 6.633L2 30l7.565-2.465a13.19 13.19 0 006.435 1.665h.001C23.292 29.2 29.25 23.242 29.25 15.999 29.25 8.708 23.292 2.75 16 2.75zm0 24.7a11.43 11.43 0 01-5.841-1.59l-.418-.247-4.491 1.465 1.476-4.377-.272-.45a11.4 11.4 0 01-1.719-6.021c0-6.293 5.117-11.41 11.41-11.41 6.293 0 11.41 5.117 11.41 11.41 0 6.293-5.117 11.41-11.41 11.41zm6.243-8.604c-.34-.17-2.01-.993-2.323-1.105-.313-.113-.54-.17-.767.17s-.877 1.105-1.076 1.333c-.198.227-.396.255-.736.085-.34-.17-1.435-.528-2.732-1.683-1.01-.898-1.69-2.008-1.89-2.348-.198-.34-.021-.523.148-.693.152-.152.34-.396.51-.594.17-.198.227-.34.34-.567.113-.227.057-.425-.028-.594-.084-.17-.767-1.85-1.051-2.53-.276-.664-.556-.57-.767-.58l-.655-.012c-.227 0-.594.085-.905.425-.31.34-1.19 1.162-1.19 2.834 0 1.672 1.219 3.286 1.39 3.513.17.227 2.398 3.656 5.813 5.124.812.35 1.446.558 1.94.714.815.26 1.555.223 2.141.136.653-.097 2.01-.82 2.296-1.611.283-.79.283-1.47.198-1.61-.084-.14-.311-.227-.65-.396z" />
    </svg>
  ),
  alt: 'WhatsApp'
}

];
  return (
  <section id="contact" className="section py-10 px-4 sm:px-8 lg:px-16">
  <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
    
    {/* Left Content */}
    <div className="flex flex-col justify-between mt-1">
      <h2 className="lg:max-w-[12ch] font-semibold text-4xl">Contact me for working</h2>

      <p className="text-zinc-400 mt-4 mb-8 max-w-[50ch]">
        Let’s build something incredible together. <br />
        Reach out today to turn your ideas into high-impact digital solutions!
      </p>

      <div className="flex flex-wrap items-center gap-4 mt-auto">
        {socialLinks.map(({ href, icon }, key) => (
          <a
            key={key}
            href={href}
            target="_blank"
            className="w-12 h-12 flex items-center justify-center ring-1 ring-inset ring-cyan-700 rounded-lg 
                       transition-colors hover:bg-cyan-700 hover:text-zinc-950 active:scale-90 text-xl"
          >
            {icon}
          </a>
        ))}
      </div>
    </div>

    {/* Right Form */}
    <form
      action="https://getform.io/f/bzynxxya"
      method="POST"
      className="bg-zinc-900 rounded-xl shadow-md p-6 sm:p-10 space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="label">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            required
            placeholder="Hassan Ali"
            className="text-field"
          />
        </div>

        <div>
          <label htmlFor="email" className="label">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            required
            placeholder="Hassan@gmail.com"
            className="text-field"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="label">Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Hi!"
          required
          className="text-field resize-y min-h-32 max-h-80"
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn btn-primary w-full max-w-full justify-center"
      >
        Submit
      </button>
    </form>
  </div>
</section>

  );
};

export default Contact;