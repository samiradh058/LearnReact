function About() {
  return (
    <>
      <div className="mt-10 text-justify text-lg">
        <h1 className="wt-100 mb-6 text-[36px] font-extrabold text-[#00264D]">
          Welcome to <span className="text-3xl italic">"My Digital Shop"</span>
        </h1>
        <p className="indent-8">
          Welcome to <span>My Digital Shop</span>, your number one source for
          <span>Electrical Gadgets</span>. We're dedicated to providing you the
          best of product/service, with a focus on
          <span>quality with a reasonable price</span>.
        </p>
        <p className="indent-8">
          Founded in <span>2001</span>, we have come a long way from its
          beginnings in Pokhara. Our mission is to make the customers satisfied
          through our business. We believe in
          <span> hardwork, dedication, and discipline.</span>
        </p>
      </div>

      <div className="mt-12 text-justify text-lg">
        <h1 className="wt-100 indent-8 text-2xl font-bold text-[#333333]">
          Don't just take our word for it—our customers love us!
        </h1>
        <table className="border-0 text-justify">
          <tr>
            <td className="w-[24px] pr-10 text-[24px]">
              John D. <span className="text-yellow-500">★★★★★</span>
            </td>
            <td className="py-6">
              "Absolutely thrilled with my purchase! I bought the wireless
              earbuds, and the sound quality is top-notch. The battery life is
              incredible, lasting me through a full day of work and more. The
              customer service was also excellent, answering all my questions
              promptly. Highly recommend this store for anyone looking for
              quality gadgets!"
            </td>
          </tr>
          <tr>
            <td className="pr-10 text-[24px]">
              Alex P. <span className="text-yellow-500">★★★★★</span>
            </td>
            <td className="py-6">
              "This is my go-to store for all things tech. I bought a portable
              charger and a Bluetooth speaker, and both exceeded my
              expectations. The charger is compact but powerful, perfect for
              travel. The speaker has amazing sound clarity for its size. Great
              products, fair prices, and fast delivery—what more could you ask
              for?"
            </td>
          </tr>
          <tr>
            <td className="pr-10 text-[24px]">
              Samantha <span className="text-yellow-500">★★★★☆</span>
            </td>
            <td className="py-6">
              "I recently purchased a smart home thermostat from this store, and
              it's been a game-changer. Installation was a breeze, and I love
              the sleek design. The only reason I'm giving four stars instead of
              five is that the shipping took a little longer than expected, but
              the product itself is fantastic. I'll definitely be shopping here
              again."
            </td>
          </tr>
          <tr>
            <td className="pr-10 text-[24px]">
              David L. <span className="text-yellow-500">★★★★☆</span>
            </td>
            <td className="py-6">
              "I ordered a smart plug, and it works like a charm! It's so
              convenient to control my devices remotely. Setup was quick and
              easy, and the app is user-friendly. The only issue I had was that
              the instructions could have been clearer, but overall, a great
              product. I’m already eyeing my next purchase from this store!"
            </td>
          </tr>
        </table>
      </div>

      <div className="mt-10 text-justify">
        <h1 className="wt-100 mb-2 indent-8 text-2xl font-bold text-[#333333]">
          Contact Us
        </h1>
        <h2 className="wt-100 text-xl">
          You can follow us on different social medias and also dirctly send us
          an email for some issues or suggestions.
        </h2>
        <div className="mx-20 flex space-x-20">
          <ul className="list-disc">
            <li className="py-1 text-[20px]">
              <a href="">Facebook</a>
            </li>
            <li className="py-1 text-[20px]">
              <a href="">Twitter</a>
            </li>
            <li className="py-1 text-[20px]">
              <a href="">Instagram</a>
            </li>
          </ul>
          <ul className="list-disc">
            <li className="py-1 text-[20px]">Email</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;
