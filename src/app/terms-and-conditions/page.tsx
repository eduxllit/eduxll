import Link from "next/link";
import HeaderLayout from "../components/headerLayout/HeaderLayout";
import Image from "next/image";
import Button from "../components/button/Button";

const AboutUs = () => {
  return (
    <HeaderLayout>
      <div className="bg-[url('/about-us/banner.webp')] bg-cover bg-no-repeat w-full">
        <div className="bg-gradient-to-r from-[#052044] to-transparent">
          <div className="text-white font-semibold lg:h-[300px] sm:h-[220px] h-[160px] grid content-center items-center sm:px-32 px-8">
            <h2 className="sm:text-4xl text-2xl block">Terms And Conditions</h2>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-1 items-center gap-6 max-w-[1200px] m-auto md:py-20 sm:py-12 py-8 lg:px-0 px-4">
        <div>
          <h3 className="sm:text-3xl text-2xl sm:text-left text-center font-semibold mb-2    ">
            Terms And Conditions
          </h3>
          <h5 className="  sm:text-[20px] text-2xl sm:text-left text-center font-semibold mb-2  ">
            Acceptance of Terms
          </h5>
          <p className=" ">
            By using our Learning Platform, you (hereinafter referred to as the
            “User” or “Users”) approve all terms, conditions, and notices
            specified or referenced in these Terms of Use (“Terms”). These Terms
            apply to your use of learning platform and all information,
            materials, content, products, services, and software that are
            licensed or owned by Eduxll Online higher education and available
            through, or, included in Learning Platform (“Eduxll Online higher
            education Content”) in addition to any content licensed or owned by
            a third-party content provider that is available through, or
            included in learning platform with that Third party’s permission
            (“Third Party Content”) (Eduxll Online higher education Content and
            Third Party Content collectively, “the Content”). If the User is a
            minor, it is the responsibility of his or her parent/guardian, to
            ensure that the User adheres to the Terms.
          </p>
          <p className="  ">
            Any Third Party Content uploaded or made available in any other way
            by a Third Party is the sole property of the Third Party or their
            licensors and remains the sole property of the same. By uploading or
            otherwise making available any Third Party Content, you
            automatically warrant and/or grant that the owner has granted Eduxll
            Online higher education, the perpetual, sole and royalty-free,
            license and right to use, publish, replicate, present, transmit and
            distribute the Third Party Content through the medium into which you
            have uploaded the Third Party Content or authorized Eduxll Online
            higher education to upload the Third Party Content. You also
            authorize any User of learning platform with access to that medium,
            depending on your restrictions, to access, analyze, store, and
            reproduce the Third Party Content to the same scope as permitted
            here. To the scope provided for in the particular terms of the
            governing agreement between Third Party, Third Party Content and
            Eduxll Online higher education might be removed, hidden, changed, or
            customized by the Third Party, conditional on the terms and
            conditions laid down herein with regard to the use of learning
            platform. Eduxll Online higher education has the right to modify
            these Terms at any time, effective upon posting the restructured
            Terms on the learning platform ‘log-in’ page. The most recent
            version is always available by clicking the Terms of Use link found
            at the bottom of the learning platform ‘log-in’ page.
          </p>

          <h2 className="text-[20px] font-[600] mb-[0px] capitalize">
            Permitted use
          </h2>
          <p>
            The learning platform is to be used to access the education program
            licensed by or for the assistance of the User(s). Eduxll Online
            higher education gives the User the sole, untransferable, limited
            license to visit, access, view, use, and print the Content,
            exclusively for the User’s individual personal non-commercial use,
            corresponding to such education programs, provided the User keeps
            all copyright and other proprietary notices intact. Use of the
            Content or other materials for any purpose not explicitly permitted
            in these Terms is proscribed.
          </p>

          <h2 className="text-[20px] font-[600] mb-[0px] capitalize">
            User Should Not Exist
          </h2>
          <p>
            Alter, obscure, or remove the content in any manner except as
            advised in writing by EduxllOnline higher education
            <br />
            Use the learning platform in any way that may harm, halt, impair, or
            overload any Eduxll Online higher educationserver or the network (or
            networks) connected to any Eduxll Online higher education server, or
            interfere with the use of the learning platform by any other party.
            <br />
            Gain or make an effort to gain unauthorized access to any computer
            systems, accounts, or networks connected to any of the Eduxll Online
            higher education servers through password mining, hacking, or any
            other means
            <br />
            Gain or attempt to gain any information or materials through any
            methods not purposely made available through learning platforms.
            <br />
            The use of a learning platform in any way for the following purposes
            is strictly prohibited. In making use of the learning platform, you
            concur that you will not.
            <br />
            Send, receive, or show obscene, pornographic, sexually explicit
            material or any other material that is harmful to minors.
            <br />
            Impersonate any entity or individual (by using their password or any
            other means), this includes any representative or employee of Eduxll
            Online higher education.
            <br />
            Copy and/or distribute content provided in the learning platform
            (this includes WebMail messages, postings on the Message Boards, or
            study material and answer keys) without the permission of the owner.
            <br />
            Solicit or gather information about the Users and/or members of this
            site, particularly with the intent of transmitting, or facilitating
            distribution of, bulk or unsolicited email or other electronic
            communications.
            <br />
            Use the communication services provided by the higher education in
            connection with surveys, schemes, contests, junk e-mail, chain
            letters, spamming, or any superfluous or duplicative messages
            (commercial or non-commercial).
            <br />
            Upload files that include viruses, worms, cancelbots, time bombs,
            Trojan horses, corrupted files, or other related programs or
            software that can damage the operation of any property or computer.
            <br />
            Request or gather personal information (this includes name, phone
            number, and address) from any individual below eighteen years of age
            without confirmed parental consent.
            <br />
            Display offensive or threatening material, this includes usage of
            swear words, insulting, vulgar, obscene, or repugnant language.
            <br />
            Display racist, biased, or discriminatory pictures or messages.
            <br />
            By submitting our webform, you agree to receive promotional calls on
            the number shared, and such calls and SMS would be coming from a
            third party platform.”
          </p>

          {/* <Button text={"Enrolled Today"} /> */}
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#ee2c3c] to-[#da202f] px-6 py-12 text-white font-semibold sm:text-[22px] text-[16px]">
        <div className="grid lg:grid-cols-[2fr_1fr] lg:gap-0 gap-4 text-center max-w-[1200px] m-auto">
          <div>
            <h2>
              {" "}
              EduXLL Learner Support- (INDIA / Foreign Nations) Talk to our
              experts
            </h2>
            <h2>We’re available 24/7.</h2>
          </div>
          <div className="flex items-center justify-center">
            <div>
              <Image
                src={"/svg/whatsapp.svg"}
                alt="whatsapp"
                width={36}
                height={36}
                className="w-full sm:w-[36px] sm:h-[36px]"
              />
            </div>
            <div>
              <Image
                src={"/svg/slash.svg"}
                alt="whatsapp"
                width={36}
                height={36}
                className="w-full sm:w-[36px] sm:h-[36px]"
              />
            </div>
            <div>
              <Image
                src={"/svg/phone-white.svg"}
                alt="whatsapp"
                width={36}
                height={36}
                className="w-full sm:w-[36px] sm:h-[36px]"
              />
            </div>
            <p className="ml-4 sm:text-2xl text-lg">+91 8448 198 656</p>
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
};
export default AboutUs;
