import React from "react";
import { Link } from "react-router-dom";

const PolicyItem = ({ header, children }: any) => {
  return (
    <div className="mb-[32px]">
      <h2 className="font-bold font-montserrat text-[24px] mb-[25px] text-brandBlack ">
        {header}
      </h2>
      <div className="flex flex-col gap-[20px] font-openSans font-normal text-[18px] text-brandBlack">
        {children}
      </div>
    </div>
  );
};

const PrivacyPolicy = () => {
  return (
    <div className="text-brandBlack font-montserrat">
      <h1 className="font-bold font-montserrat text-[45px]  mb-[15px]">
        Leadlift.io Privacy Policy
      </h1>
      <p className="font-semibold text-[20px] mb-[25px]">
        Effective Date: August 1, 2023
      </p>
      <p className="font-openSans text-[18px] font-normal">
        Welcome to{" "}
        <Link to="/" className="text-brandBlue mx-1 font-montserrat font-bold">
          {" "}
          Leadlift.io
        </Link>
        , the official website of Leadlift, a Social Media Marketing Agency. At
        Leadlift, we are committed to protecting your privacy and ensuring the
        security of your personal information. This Privacy Policy outlines how
        we collect, use, and safeguard the data and information you provide
        while using this Website. By accessing and using this Website, you
        consent to the practices described in this Privacy Policy.
      </p>
      <div className="my-[45px]">
        <PolicyItem header="1. Information We Collect:">
          <p>
            1.1. Personal Information: When you interact with our Website, we
            may collect personal information that you voluntarily provide, such
            as your name, email address, contact number, and any other
            information you choose to submit through forms or communications.
          </p>
          <p>
            1.2. Usage Information: We may collect non-personal information
            about your interactions with the Website, including your IP address,
            browser type, device information, and pages visited. This data is
            collected through cookies and similar tracking technologies.
          </p>
        </PolicyItem>
        <PolicyItem header="2. Use of Information:">
          <p>
            2.1. We may use the information collected for the following
            purposes:
          </p>
          <ul className="flex flex-col gap-[8px] list-disc list-inside">
            <li>To provide and improve our services and offerings.</li>
            <li> To respond to your inquiries, comments, or requests. </li>
            <li>
              To send you relevant marketing and promotional communications (you
              may opt-out at any time).
            </li>
            <li>To personalize your experience on our Website.</li>
            <li>
              To detect and prevent fraud and protect the security of our users.
            </li>
            <li>
              To comply with legal obligations and enforce our Terms of Use.
            </li>
          </ul>
        </PolicyItem>
        <PolicyItem header="3. Data Sharing and Disclosure:">
          <p>
            3.1. We do not sell, trade, or otherwise transfer your personal
            information to third parties for marketing purposes. However, we may
            share your information with trusted service providers who assist us
            in operating our Website or conducting our business. These
            third-party service providers are contractually bound to use your
            information solely for the purposes specified by Leadlift and in
            compliance with applicable privacy laws.
          </p>
          <p>
            3.2. In order to uphold our policies and agreements, protect
            Leadlift, our users, or others from harm, or in response to a
            legitimate legal request, we may also disclose your information if
            required to do so by law.
          </p>
        </PolicyItem>
        <PolicyItem header="4. Cookies and Tracking:">
          <p>
            4.1. We use cookies and similar tracking technologies to enhance
            your browsing experience on our Website. Cookies help us remember
            your preferences and provide you with personalized content. You have
            the option to manage your cookie preferences through your browser
            settings.
          </p>
        </PolicyItem>
        <PolicyItem header="5. Data Retention:">
          <p>
            5.1. We will retain your personal information for as long as
            necessary to fulfill the purposes outlined in this Privacy Policy or
            as required by law. When we no longer need your data, we will
            securely delete or anonymize it.
          </p>
        </PolicyItem>
        <PolicyItem header="6. Your Rights:">
          <p>
            6.1. You have the right to access, amend, update, or delete the
            personal data that Leadlift holds about you. To exercise any of
            these rights or for any data-related inquiries, please contact us at
            contact@leadlift.io. We will respond to your requests within the
            timeframes required by applicable data protection laws.
          </p>
        </PolicyItem>
        <PolicyItem header="7. CCPA and GDPR Compliance:">
          <p>
            7.1. If you are a resident of California, USA, you have specific
            rights under the California Consumer Privacy Act (CCPA), such as the
            right to know about the personal information we have collected about
            you, the right to delete your information, and the right to opt-out
            of the sale of your information. If you are an EU resident, the
            General Data Protection Regulation (GDPR) grants you certain rights,
            including the right to access, rectify, or erase your personal data.
            For more information on exercising your rights, please contact us at
            contact@leadlift.io.
          </p>
        </PolicyItem>
        <PolicyItem header="8. Data Security:">
          <p>
            8.1. We implement industry-standard security measures to protect
            your information from unauthorized access, loss, misuse, alteration,
            or disclosure. However, no method of data transmission over the
            Internet or electronic storage is completely secure, and we cannot
            guarantee the absolute security of your data.
          </p>
        </PolicyItem>
        <PolicyItem header="9. Children's Privacy:">
          <p>
            9.1. This Website is not intended for use by individuals under the
            age of 18. We do not knowingly collect personal information from
            children. If you believe we have inadvertently collected information
            from a child, please contact us immediately, and we will take
            appropriate steps to delete such data.
          </p>
        </PolicyItem>
        <PolicyItem header="10. Policy Updates:">
          <p>
            10.1. We reserve the right to update or modify this Privacy Policy
            at any time to reflect changes to our practices or for legal,
            operational, or regulatory reasons. The most current version will be
            posted on this page, with the effective date indicated. We encourage
            you to review this Privacy Policy periodically to stay informed
            about how we are protecting your information.
          </p>
        </PolicyItem>
      </div>
      <div>
        <p className="font-openSans text-[18px] text-brandBlack font-normal">
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at
          <a
            href="mailto:contact@leadlift.io"
            className="text-brandBlue cursor-pointer underline font-semibold font-montserrat mx-1">
            contact@leadlift.io.
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
