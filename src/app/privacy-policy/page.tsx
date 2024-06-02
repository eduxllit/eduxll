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
            <h2 className="sm:text-4xl text-2xl block">Privacy Policy</h2>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-1 items-center gap-6 max-w-[1200px] m-auto md:py-20 sm:py-12 py-8 lg:px-0 px-4">
        <div>
          <h3 className="sm:text-3xl text-2xl sm:text-left text-center font-semibold mb-2    ">
            Privacy Policy
          </h3>
          <h5 className="  sm:text-[20px] text-2xl sm:text-left text-center font-semibold mb-2  ">
            Who we are
          </h5>
          <p className=" ">
            <b>Suggested text:</b> Our website address is:
            https://www.eduxll.com.
          </p>

          <h2 className="text-[20px] font-[600] mb-[0px] capitalize">
            Comments
          </h2>

          <p>
            <b>Suggested text:</b> When visitors leave comments on the site we
            collect the data shown in the comments form, and also the visitor’s
            IP address and browser user agent string to help spam detection.
          </p>
          <p>
            An anonymized string created from your email address (also called a
            hash) may be provided to the Gravatar service to see if you are
            using it. The Gravatar service privacy policy is available here:
            https://automattic.com/privacy/. After approval of your comment,
            your profile picture is visible to the public in the context of your
            comment.
          </p>
          <h2 className="text-[20px] font-[600] mb-[0px] capitalize">Media</h2>
          <p>
            Suggested text: If you upload images to the website, you should
            avoid uploading images with embedded location data (EXIF GPS)
            included. Visitors to the website can download and extract any
            location data from images on the website.
          </p>
          <h2 className="text-[20px] font-[600] mb-[0px] capitalize">
            Cookies
          </h2>
          <p>
            Suggested text: If you leave a comment on our site you may opt-in to
            saving your name, email address and website in cookies. These are
            for your convenience so that you do not have to fill in your details
            again when you leave another comment. These cookies will last for
            one year.
          </p>

          <p>
            {" "}
            If you visit our login page, we will set a temporary cookie to
            determine if your browser accepts cookies. This cookie contains no
            personal data and is discarded when you close your browser.
          </p>

          <p>
            When you log in, we will also set up several cookies to save your
            login information and your screen display choices. Login cookies
            last for two days, and screen options cookies last for a year. If
            you select “Remember Me”, your login will persist for two weeks. If
            you log out of your account, the login cookies will be removed.
          </p>

          <p>
            If you edit or publish an article, an additional cookie will be
            saved in your browser. This cookie includes no personal data and
            simply indicates the post ID of the article you just edited. It
            expires after 1 day.
          </p>
          <h2 className="text-[20px] font-[600] mb-[0px] capitalize">
            Embedded content from other websites
          </h2>
          <p>
            Suggested text: Articles on this site may include embedded content
            (e.g. videos, images, articles, etc.). Embedded content from other
            websites behaves in the exact same way as if the visitor has visited
            the other website.
          </p>
          <p>
            These websites may collect data about you, use cookies, embed
            additional third-party tracking, and monitor your interaction with
            that embedded content, including tracking your interaction with the
            embedded content if you have an account and are logged in to that
            website.
          </p>

          <h2 className="text-[20px] font-[600] mb-[0px] capitalize">
            Who we share your data with
          </h2>
          <p>
            Suggested text: If you request a password reset, your IP address
            will be included in the reset email.
          </p>

          <h2 className="text-[20px] font-[600] mb-[0px] capitalize">
            How long we retain your data
          </h2>
          <p>
            Suggested text: If you leave a comment, the comment and its metadata
            are retained indefinitely. This is so we can recognize and approve
            any follow-up comments automatically instead of holding them in a
            moderation queue.
          </p>
          <p>
            For users that register on our website (if any), we also store the
            personal information they provide in their user profile. All users
            can see, edit, or delete their personal information at any time
            (except they cannot change their username). Website administrators
            can also see and edit that information.
          </p>

          <h2 className="text-[20px] font-[600] mb-[0px] capitalize">
            What rights you have over your data
          </h2>
          <p>
            Suggested text: If you have an account on this site, or have left
            comments, you can request to receive an exported file of the
            personal data we hold about you, including any data you have
            provided to us. You can also request that we erase any personal data
            we hold about you. This does not include any data we are obliged to
            keep for administrative, legal, or security purposes.
          </p>
          <h2 className="text-[20px] font-[600] mb-[0px] capitalize">
            Where we send your data
          </h2>
          <p>
            Suggested text: Visitor comments may be checked through an automated
            spam detection service.
          </p>
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
