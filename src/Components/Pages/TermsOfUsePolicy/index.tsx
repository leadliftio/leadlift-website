import React from "react";

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

const TermsOfUsePolicy = () => {
  return (
    <div className="text-brandBlack font-montserrat">
      <h1 className="font-bold font-montserrat text-[45px]  mb-[15px]">
        Leadlift.io Terms of Use Policy
      </h1>
      <p className="font-semibold text-[20px] mb-[25px]">
        Effective Date: August 1, 2023
      </p>
      <p className="font-openSans text-[18px] font-normal">
        Welcome to Leadlift.io ("Website"), the official website of Leadlift, a
        Social Media Marketing Agency. Before using this Website, please
        carefully read and understand the following Terms of Use ("Terms"). By
        accessing and using this Website, you agree to be bound by these Terms.
        If you do not agree with any part of these Terms, do not access or use
        this Website.
      </p>
      <div className="my-[45px]">
        <PolicyItem header="1. Age Requirement:">
          <p>
            1.1. By accessing or using this Website, you affirm that you are at
            least [minimum age requirement, e.g., 18 years old] or the age of
            majority in your jurisdiction, whichever is higher. If you are below
            the required age, you must seek parental or guardian consent before
            using this Website.
          </p>
        </PolicyItem>
        <PolicyItem header="2. Intellectual Property:">
          <p>
            2.1. All content, materials, and information provided on this
            Website, including but not limited to text, graphics, logos, images,
            videos, and software, are the property of Leadlift or its licensors
            and are protected by applicable intellectual property laws. You may
            not use, reproduce, modify, distribute, or transmit any content from
            this Website without prior written consent from Leadlift.
          </p>
        </PolicyItem>
        <PolicyItem header="3. Use of Website:">
          <p>
            3.1. You are granted a limited, non-exclusive, non-transferable, and
            revocable license to access and use this Website for personal,
            non-commercial purposes only.
          </p>
          <p>
            3.2. You agree not to engage in any activity that may disrupt or
            interfere with the proper functioning of the Website or its
            services, including but not limited to hacking, spamming,
            distributing malware, or engaging in any unlawful or prohibited
            activities.
          </p>
          <p>
            3.3. You are solely responsible for any content you submit or post
            on this Website, including comments, feedback, or any other
            information. You must ensure that your content complies with
            applicable laws and does not infringe on the rights of any third
            party.
          </p>
        </PolicyItem>
        <PolicyItem header="4. Privacy and Data Protection:">
          <p>
            4.1. Our Privacy Policy governs the collection, use, and disclosure
            of personal information and data on this Website. By using this
            Website, you consent to the practices outlined in our Privacy
            Policy.
          </p>
        </PolicyItem>
        <PolicyItem header="5. Third-Party Links:">
          <p>
            5.1. This Website may contain links to third-party websites that are
            not owned or controlled by Leadlift. We are not responsible for the
            content, practices, or policies of any third-party websites. Your
            use of third-party websites is at your own risk, and we encourage
            you to review their terms and privacy policies.
          </p>
        </PolicyItem>
        <PolicyItem header="6. Disclaimer of Warranties:">
          <p>
            6.1. This Website and its content are provided on an "as-is" basis
            without any warranties, express or implied. Leadlift makes no
            representations or warranties regarding the accuracy, completeness,
            or reliability of the content on this Website.
          </p>
          <p>
            6.2. Leadlift does not warrant that this Website will be free from
            errors, viruses, or other harmful components or that access to this
            Website will be uninterrupted.
          </p>
        </PolicyItem>
        <PolicyItem header="7. Limitation of Liability:">
          <p>
            7.1. Leadlift and its affiliates, partners, directors, officers,
            employees, and agents shall not be liable for any damages, direct or
            indirect, arising from or in connection with the use of this Website
            or its content. This includes, but is not limited to, any loss of
            data, profits, business, or reputation.
          </p>
        </PolicyItem>
        <PolicyItem header="8. Indemnification:">
          <p>
            8.1. You agree to indemnify and hold harmless Leadlift and its
            affiliates, partners, directors, officers, employees, and agents
            from and against any and all claims, damages, liabilities, costs,
            and expenses arising from or related to your use of this Website,
            your violation of these Terms, or your infringement of any rights of
            another party.
          </p>
        </PolicyItem>
        <PolicyItem header="9. Modifications and Termination:">
          <p>
            9.1. Leadlift reserves the right to modify or terminate this
            Website, its content, or any services offered at any time without
            prior notice.
          </p>
          <p>
            9.2. Leadlift may update these Terms from time to time. The most
            current version will be posted on this page. Your continued use of
            this Website after any changes to these Terms constitutes your
            acceptance of the revised Terms.
          </p>
        </PolicyItem>
        <PolicyItem header="10. Governing Law and Jurisdiction:">
          <p>
            10.1. Without regard to its conflict of law provisions, the laws of
            the State of Delaware, United States, shall govern and govern these
            Terms.
          </p>
          <p>
            10.2. Any dispute arising from or related to these Terms or your use
            of this Website shall be subject to the exclusive jurisdiction of
            the courts located in the State of Delaware, United States.
          </p>
        </PolicyItem>
      </div>
      <div>
        <p className="font-openSans text-[18px] text-brandBlack font-normal">
          If you have any questions or concerns about these Terms of Use, please
          contact us at{" "}
          <a
            href="mailto:contact@leadlift.io"
            className="text-brandBlue cursor-pointer underline">
            contact@leadlift.io.
          </a>
        </p>
      </div>
    </div>
  );
};

export default TermsOfUsePolicy;
