import React from "react";
import userData from "@constants/data";
import emailjs from "emailjs-com";


export default function Contact() {

  const send = (e) => {
    e.preventDefault();

    // Send user's message
    emailjs
      .send(
        "service_pzqyy9x",
        "template_adg8a24",
        {
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        },
        "9Pv5FIBG6vrBejmFt"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        e.target.reset();

        // Send auto-reply
        emailjs
          .send(
            "service_0xwkh51",
            "template_auto_reply",
            {
              name: e.target.name.value,
              email: e.target.email.value,
            },
            "9u3bvylFqjIva-sQx"
          )
          .then((response) => {
            console.log("Auto-reply sent!", response.status, response.text);
          })
          .catch((error) => {
            console.log("Failed to send auto-reply...", error);
          });
      })
      .catch((error) => {
        console.log("Failed to send message...", error);
      });
  };
  return (
    <section>
      <div className=" mx-auto bg-[#F6F5F3] dark:bg-[#1F1F1F]">
        <h1 className="text-5xl md:text-7xl font-bold text-center md:text-center text-[#1F1F1F] dark:text-white">
          Contact
        </h1>
      </div>

      {/* Container */}

      <div className="mx-auto rounded-xl bg-[#5CAE5B] p-20 m-10 md:m-20 sm:grid-cols-3 gap-20 mt-20 mx-auto lg:grid-cols-3 max-w-6xl mx-auto gap-20 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Column 1: Contact Information */}
          <div className="md:ml-4">
            <header className="">
              <h1 className="text-[#EFEDE7] font-semibold text-2xl justify-center">
                Get in touch, let's talk.
              </h1>
              <p className="font-light text-base text-[#EFEDE7] mt-2">
                Fill in the details and I'll get back to you as soon as I can!
              </p>
            </header>

            {/* Email & Social Medias */}
            <div className="items-center my-10 space-y-6">
              {/* Email */}
              <div className="m-10 md:m-10">
                <a href={`mailto:${userData.email}`} className="flex items-center justify-center border-[#F2CD5D] hover:border-[#F6DC8E] my-2 p-3 space-x-6 rounded-md border-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#EFEDE7"
                    className="bi bi-envelope-fill h-4 w-4 text-white-100"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                  </svg>
                  <p className="text-gray-50 font-light text-sm text-auto">
                    {userData.email}
                  </p>
                </a>
              </div>

              {/* Social Media Links */}
              <div className="flex flex-row space-x-5 justify-center">
                {/* LinkedIn Logo*/}
                <a
                  href={userData.socialLinks.linkedin}
                  className="h-10 w-10 rounded-full hover:bg-gray-100 flex items-center justify-center cursor-pointer"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 4.32353V19.6765C21 20.0275 20.8606 20.3641 20.6123 20.6123C20.3641 20.8606 20.0275 21 19.6765 21H4.32353C3.97251 21 3.63586 20.8606 3.38765 20.6123C3.13944 20.3641 3 20.0275 3 19.6765V4.32353C3 3.97251 3.13944 3.63586 3.38765 3.38765C3.63586 3.13944 3.97251 3 4.32353 3H19.6765C20.0275 3 20.3641 3.13944 20.6123 3.38765C20.8606 3.63586 21 3.97251 21 4.32353ZM8.29412 9.88235H5.64706V18.3529H8.29412V9.88235ZM8.53235 6.97059C8.53375 6.77036 8.49569 6.57182 8.42035 6.3863C8.34502 6.20078 8.23387 6.03191 8.09328 5.88935C7.95268 5.74678 7.78537 5.6333 7.60091 5.5554C7.41646 5.47749 7.21846 5.43668 7.01824 5.43529H6.97059C6.5634 5.43529 6.17289 5.59705 5.88497 5.88497C5.59705 6.17289 5.43529 6.5634 5.43529 6.97059C5.43529 7.37777 5.59705 7.76828 5.88497 8.05621C6.17289 8.34413 6.5634 8.50588 6.97059 8.50588C7.17083 8.51081 7.37008 8.47623 7.55696 8.40413C7.74383 8.33202 7.91467 8.2238 8.0597 8.08565C8.20474 7.94749 8.32113 7.78212 8.40223 7.59897C8.48333 7.41582 8.52755 7.21848 8.53235 7.01824V6.97059ZM18.3529 13.2071C18.3529 10.6606 16.7329 9.67059 15.1235 9.67059C14.5966 9.6442 14.0719 9.75644 13.6019 9.9961C13.1318 10.2358 12.7328 10.5945 12.4447 11.0365H12.3706V9.88235H9.88235V18.3529H12.5294V13.8476C12.4911 13.3862 12.6365 12.9283 12.9339 12.5735C13.2313 12.2186 13.6567 11.9954 14.1176 11.9524H14.2182C15.06 11.9524 15.6847 12.4818 15.6847 13.8159V18.3529H18.3318L18.3529 13.2071Z"
                      fill="white" />
                  </svg>

                </a>
                {/* GitHub Logo*/}
                <a
                  href={userData.socialLinks.github}
                  className="h-10 w-10 rounded-full hover:bg-gray-100 flex items-center justify-center cursor-pointer"
                >
                  <svg width="30" height="30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                      fill="#fff" />
                  </svg>
                </a>

                {/* BeHance Logo*/}
                <a
                  href={userData.socialLinks.behance}
                  className="h-10 w-10 rounded-full hover:bg-gray-100 flex items-center justify-center cursor-pointer"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.78912 5.40347C8.32952 5.39344 8.86916 5.44884 9.39625 5.56847C9.84003 5.66536 10.2614 5.84566 10.6379 6.09978C10.9856 6.35248 11.2608 6.6922 11.4357 7.08485C11.6367 7.56768 11.7337 8.08746 11.7203 8.6103C11.7431 9.18438 11.5965 9.75249 11.2987 10.2438C10.9854 10.7079 10.5524 11.0785 10.0455 11.3163C10.7334 11.5018 11.3325 11.9266 11.7352 12.5143C12.1217 13.137 12.316 13.8599 12.2937 14.5925C12.3064 15.1766 12.1857 15.7559 11.9406 16.2862C11.714 16.7489 11.3823 17.1521 10.972 17.4635C10.5496 17.7716 10.0742 17.9995 9.5695 18.1359C9.04611 18.2807 8.50542 18.3534 7.96237 18.3521H2V5.40347H7.78912ZM7.44509 10.6407C7.86969 10.6582 8.28766 10.5311 8.63063 10.2801C8.79489 10.1339 8.92266 9.95128 9.00374 9.74686C9.08482 9.54244 9.11696 9.32189 9.09759 9.10283C9.10858 8.84698 9.05764 8.59226 8.94909 8.36032C8.85701 8.17565 8.71383 8.02131 8.53658 7.91564C8.35705 7.79932 8.15535 7.72151 7.94422 7.68711C7.71514 7.64273 7.48203 7.62255 7.24874 7.62688H4.70109V10.6522H7.44509V10.6407ZM7.59359 16.1534C7.85037 16.1569 8.10662 16.1292 8.35673 16.0709C8.58529 16.0204 8.80205 15.9266 8.99529 15.7945C9.1846 15.6625 9.33754 15.4849 9.43997 15.2781C9.55874 15.0143 9.61331 14.7262 9.5992 14.4374C9.62495 14.1741 9.59008 13.9085 9.49727 13.6608C9.40446 13.4131 9.25617 13.1899 9.06377 13.0084C8.65596 12.7081 8.1562 12.5593 7.65052 12.5877H4.70109V16.1534H7.59359Z" f
                      fill="white" />
                    <path d="M16.1407 16.1055C16.3527 16.302 16.6025 16.4534 16.8748 16.5504C17.1471 16.6474 17.4363 16.6881 17.7248 16.6699C18.1821 16.6814 18.6306 16.5423 19.0011 16.2738C19.3025 16.0779 19.5307 15.7879 19.6503 15.4488H21.8045C21.5749 16.414 21.0145 17.2681 20.2204 17.8628C19.4587 18.3684 18.5585 18.6245 17.6447 18.5954C16.9926 18.604 16.3453 18.4814 15.7414 18.2349C15.1952 18.0071 14.7053 17.6627 14.3059 17.2259C13.9081 16.7682 13.6024 16.2379 13.4058 15.6642C13.1851 15.0229 13.0771 14.3482 13.0865 13.6701C13.0825 13.0033 13.1942 12.3409 13.4165 11.7123C13.7153 10.828 14.2865 10.0611 15.0482 9.52156C15.8099 8.98204 16.7229 8.69768 17.6563 8.7093C18.3454 8.6949 19.0268 8.85616 19.6363 9.17791C20.1873 9.48003 20.6626 9.90314 21.0265 10.4154C21.3987 10.953 21.6655 11.5563 21.8127 12.1933C21.9741 12.8774 22.0317 13.5819 21.9835 14.2831H15.5674C15.5154 14.9419 15.7209 15.5952 16.1407 16.1055ZM18.9557 11.181C18.7761 11.0015 18.5602 10.8624 18.3224 10.7733C18.0846 10.6843 17.8304 10.6472 17.5771 10.6646C17.241 10.6518 16.9073 10.7262 16.6085 10.8807C16.3717 11.0111 16.1626 11.1866 15.9931 11.3972C15.8428 11.5947 15.7309 11.8185 15.6631 12.0572C15.6019 12.2563 15.5637 12.4616 15.5492 12.6694H19.5233C19.4887 12.1279 19.2914 11.6094 18.9573 11.1819L18.9557 11.181Z"
                      fill="white" />
                    <path d="M20.0166 6.26807H15.0369V7.54106H20.0166V6.26807Z"
                      fill="white" />
                  </svg>
                </a>

              </div>
            </div >
          </div >

          {/* Column 2: Contact Form */}
          <div className="md:col-span-1">
            <form className="form rounded-lg bg-[#F6F5F3] dark:bg-[#3D3D3D] p-4 flex flex-col" onSubmit={send}>
              <label htmlFor="name" className="text-sm font-semibold text-[#1F1F1F] dark:text-[#F6F5F3] mx-4">
                {" "}
                Full Name
              </label>
              <input
                type="text"
                className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-[#999999] dark:ring-[#666666]"
                name="name"
              />
              <label htmlFor="email" className="text-sm font-semibold text-[#1F1F1F] dark:text-[#F6F5F3] mx-4 mt-4">
                Email
              </label>
              <input
                type="text"
                className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-[#999999] dark:ring-[#666666]"
                name="email"
              />
              <label htmlFor="message" className="text-sm font-semibold text-[#1F1F1F] dark:text-[#F6F5F3] mx-4 mt-4">
                Message
              </label>
              <textarea
                rows="4"
                className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-[#999999] dark:ring-[#666666]"
                name="message"
                placeholder="Be sure to put your email and number so I can get back to you!"
              ></textarea>

              <div className="items-center md:items-center mt-8">
                <button
                  type="submit"
                  className="bg-[#8B4513] hover:bg-[#C5621B] dark:bg-[#D2B48C] dark:hover:bg-[#E9B35D] rounded-md w-1/2 mx-4 py-2 text-[#FCFAF9] dark:text-[#FCFAF9] text-xs font-bold"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div >



    </section >
  );
}
