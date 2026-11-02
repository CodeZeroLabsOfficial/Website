import Link from "next/link";
import {
  LegalA,
  LegalH2,
  LegalH3,
  LegalLead,
  LegalP,
  LegalUl,
} from "@/components/legal/LegalArticle";
import { SUPPORT_EMAIL, legalEntity } from "@/lib/site";

const mail = `mailto:${SUPPORT_EMAIL}`;

export function PrivacyIntro() {
  return (
    <>
      <LegalLead>
        {legalEntity.name} ACN {legalEntity.acn} (ABN {legalEntity.abn})
        (“we”, “our”, or “us”) values your privacy and is committed to
        protecting personal information. This Privacy Policy explains how we
        collect, use, and safeguard information when you use Depesch, including
        our dispatch platform, mobile apps, and related services.
      </LegalLead>
      <LegalLead>
        When used in this policy, “personal information” has the meaning given
        to that term in the Privacy Act 1988 (Cth).
      </LegalLead>
    </>
  );
}

export function PrivacyContent() {
  return (
    <>
      <LegalH2>1. Personal information we collect</LegalH2>
      <LegalP>
        The types of personal information we may collect from you in the course
        of our business vary depending on our relationship with you and may
        include:
      </LegalP>
      <LegalUl>
        <li>
          your contact details, such as name, address, email address, and phone
          number;
        </li>
        <li>
          your guests’ contact details, such as name, address, email address,
          and phone number;
        </li>
        <li>
          financial information in connection with payments to us, such as your
          bank account, credit card details and transaction history;
        </li>
        <li>details related to where and when you request our services;</li>
        <li>
          if you are a candidate for a role with us, or our employee or
          contractor, additional personal information during recruitment and as
          part of our ongoing relationship with you. This may include:
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>proof of your identity;</li>
            <li>
              driver and fleet operator licence details, as well as details of
              any other licences or accreditations that evidence your
              qualification to perform the role;
            </li>
            <li>
              information included in your résumé, such as your education,
              employment history, referee details and working eligibility
              rights;
            </li>
            <li>
              pre-employment working rights, criminal record and other
              background checks;
            </li>
            <li>date of birth;</li>
            <li>tax file number and bank account details.</li>
          </ul>
        </li>
      </LegalUl>
      <LegalP>
        If you are our customer, driver or fleet operator, please refer to the
        Mobile App section that follows for detailed information about
        collection of personal information through our mobile application (
        <strong className="font-medium text-white">Mobile App</strong>).
      </LegalP>
      <LegalP>
        If you do not provide the personal information that we request, or
        choose to interact with us anonymously, the following may occur:
      </LegalP>
      <LegalUl>
        <li>we may be unable to provide services to you;</li>
        <li>
          we may be unable to tailor our marketing communications to suit your
          preferences;
        </li>
        <li>
          your experience when interacting with us may be delayed or not as
          efficient as you may expect; or
        </li>
        <li>
          if you are applying for a role with us, we may not be able to process
          your application.
        </li>
      </LegalUl>

      <LegalH2>2. Mobile App</LegalH2>
      <LegalH3>Use of the Mobile App by drivers and fleet operators</LegalH3>
      <LegalP>
        When using our Mobile App, your location may be sent back to our
        servers for processing. This data is collected to ensure the safety of
        our customers, drivers and fleet operators. All of our drivers and
        fleet operators are required to enable location tracking when using our
        Mobile App. Location data is tracked when the application is open, and
        from when the driver or fleet operator starts a trip until the trip is
        closed. When the application is closed and a trip is not in progress,
        no location tracking is actively performed.
      </LegalP>
      <LegalP>
        Our applications may require us to collect images and other information
        from a driver’s or fleet operator’s device camera and photos. For
        example, when adding pictures of your vehicle to your profile or adding
        a profile picture so customers and other drivers and fleet operators
        can identify you. We will never access your camera roll without your
        permission.
      </LegalP>
      <LegalH3>Use of the Mobile App by our customers</LegalH3>
      <LegalP>
        If you are our customer and use our Mobile App, we currently do not
        track passengers at any time before, during or after a trip.
      </LegalP>

      <LegalH2>3. Collection of sensitive information</LegalH2>
      <LegalP>
        We may collect some sensitive information about you. However, we will
        only do so with your consent, or where permitted or required by law.
      </LegalP>
      <LegalP>
        Sensitive information is a special category of personal information,
        such as an individual’s health information, racial origin, political
        opinion, religious beliefs, sexual orientation or criminal record. We
        may collect such information from you in connection with your
        employment or engagement with us, or, in limited circumstances, if you
        are our customer. For example, we may collect your health information
        if you have a disability that needs to be accommodated for us to
        provide our services to you.
      </LegalP>

      <LegalH2>4. Cookies and device information</LegalH2>
      <LegalP>
        We may use temporary (session) cookies or permanent cookies when you
        access our website. A “cookie” is a small text file that is placed on
        your device by our web page server. This allows us to recognise your
        browser and track the web pages you have visited. You can switch off
        cookies by adjusting the settings on your web browser. The help
        function within your browser can assist you with this.
      </LegalP>
      <LegalP>
        We may collect information about the devices you use to access our
        website and Mobile App — this information may include your device IMEI
        number, IP address or MAC address and other unique device identifiers.
      </LegalP>

      <LegalH2>5. How we collect your personal information</LegalH2>
      <LegalP>
        Normally, we collect information from you directly. This can occur
        through the following interactions:
      </LegalP>
      <LegalUl>
        <li>when you sign up and complete your registration;</li>
        <li>
          when you communicate with us directly (by email, telephone, direct
          mail or any other means other than through our drivers and fleet
          operators);
        </li>
        <li>when you access and use our website or Mobile App;</li>
        <li>
          when you interact with us during promotions, competitions, special
          events, or by using devices within our cars such as QR codes; or
        </li>
        <li>
          if you are a candidate for employment, when you complete forms in
          relation to the recruitment and selection process, for the purpose of
          assessment.
        </li>
      </LegalUl>
      <LegalP>
        We may also collect information about you from third parties. For
        example, we may collect personal information about you from:
      </LegalP>
      <LegalUl>
        <li>persons acting on your behalf when requesting services from us;</li>
        <li>referees and recruitment agencies;</li>
        <li>
          commercial information service providers, such as those providing
          background check services; and
        </li>
        <li>publicly available sources, such as social media platforms.</li>
      </LegalUl>

      <LegalH2>6. How we hold your personal information</LegalH2>
      <LegalP>
        We may hold your personal information in either electronic or hard copy
        form.
      </LegalP>
      <LegalP>
        If you provide information to us electronically, we retain this
        information in our computer systems and databases. This includes
        computer software programs, internet servers, and hosted internet
        solutions provided by third parties.
      </LegalP>
      <LegalP>
        If you provide information to us in hard copy, this information is
        normally retained in our files and a copy is made to our electronic
        files.
      </LegalP>

      <LegalH2>7. Security</LegalH2>
      <LegalP>
        We take reasonable steps to ensure your personal information is
        protected from misuse, loss, unauthorised access, modification or
        disclosure.
      </LegalP>
      <LegalP>
        We use industry standard security measures to safeguard and protect
        your personal information. Some examples of the measures that we
        implement include:
      </LegalP>
      <LegalUl>
        <li>
          utilising firewalls, virus scanning software and multifactor
          authentication to protect our systems;
        </li>
        <li>
          encrypting your information as part of internet transactions, as well
          as at rest; and
        </li>
        <li>
          masking your phone number when you contact our drivers and fleet
          operators directly (and vice versa).
        </li>
      </LegalUl>
      <LegalP>
        We monitor and regularly audit our systems to ensure the security
        measures remain current.
      </LegalP>

      <LegalH2>
        8. What purposes do we collect, hold, use and disclose your personal
        information for?
      </LegalH2>
      <LegalP>
        We may collect, hold, use and disclose your personal information for
        any of the following purposes:
      </LegalP>
      <LegalUl>
        <li>
          to provide you with our services and support our related business
          operations;
        </li>
        <li>to improve and personalise the services we provide;</li>
        <li>
          to communicate with you, including about our services, competitions,
          special offers, and events which might interest you;
        </li>
        <li>to consider and respond to complaints made by you;</li>
        <li>
          if you are a candidate for a role with us, to assess your suitability
          for that role;
        </li>
        <li>
          if you are our employee or a contractor (including a driver or fleet
          operator) engaged by us, to manage our ongoing relationship with you;
        </li>
        <li>
          to comply with laws or regulations or to comply with any directions
          given by regulators or authorities;
        </li>
        <li>
          if you are a supplier that provides services to us, to facilitate the
          acquisition of such services; and/or
        </li>
        <li>
          as otherwise permitted by law, for example, for a related purpose
          (where you would reasonably expect that your personal information
          would be used or disclosed for that purpose).
        </li>
      </LegalUl>

      <LegalH2>9. Who do we disclose your personal information to?</LegalH2>
      <LegalP>
        As part of our operations, we may disclose your personal information to
        third parties for one of the above purposes, or a related purpose.
      </LegalP>
      <LegalP>
        In a general commercial context, these third parties include:
      </LegalP>
      <LegalUl>
        <li>our employees, contractors and affiliate drivers and fleet operators;</li>
        <li>
          third party service providers that support our business operations.
          These include technology service providers: software vendors,
          internet service providers, IT systems administrators, data entry
          service providers and payment processors; and third parties that
          assist us with our marketing activities, competitions and promotions;
        </li>
        <li>
          our business advisors, including lawyers, accountants and other
          professional service providers, to the extent reasonably required.
        </li>
      </LegalUl>
      <LegalP>
        If you are a job applicant, or an employee or contractor, we may
        disclose your personal information to:
      </LegalP>
      <LegalUl>
        <li>
          recruitment agencies and other third parties that assist us with our
          recruitment activities;
        </li>
        <li>
          third parties that are involved with payment of salary or fees to
          you, such as banks, superannuation funds and payroll administration
          providers;
        </li>
        <li>
          insurers, in connection with workers compensation insurance or other
          insurance claims.
        </li>
      </LegalUl>
      <LegalP>
        We may also disclose your personal information to third parties if
        required by law. This may include the police, ambulance service, or
        government departments or regulators in connection with law enforcement
        activities.
      </LegalP>

      <LegalH2>10. Overseas disclosure</LegalH2>
      <LegalP>
        We may disclose your personal information to third parties and service
        providers located overseas.
      </LegalP>
      <LegalP>
        We take reasonable steps to ensure that the overseas recipients of your
        personal information do not breach the privacy obligations relating to
        your personal information.
      </LegalP>

      <LegalH2>11. Direct marketing</LegalH2>
      <LegalP>
        We may use your personal information to send you direct marketing
        communications and information about services and products offered by
        us or our partners. We may do this through various means, such as
        regular mail, email, SMS, through social media or by other means, such
        as Mobile App notifications. In using your personal information for
        marketing purposes, we will comply with the applicable laws and obtain
        your consent as may be required.
      </LegalP>
      <LegalP>
        You can opt-out of receiving marketing communications from us at any
        time by:
      </LegalP>
      <LegalUl>
        <li>
          contacting us (refer to the Contacting us section below);
        </li>
        <li>
          following unsubscribe instructions in the communication that you have
          received from us.
        </li>
      </LegalUl>
      <LegalP>
        If you opt-out from receiving marketing communications from us, we will
        still send you service-related communications.
      </LegalP>

      <LegalH2>12. Access to your personal information</LegalH2>
      <LegalP>
        You may access your personal information held by us via our online
        portal by accessing your own account over the internet.
      </LegalP>
      <LegalP>
        There may be situations where we will be unable to give you access to
        your personal information. For example, if giving access would be
        unlawful or if your request is vexatious or may interfere with the
        privacy of others.
      </LegalP>

      <LegalH2>13. Updating and correcting your personal information</LegalH2>
      <LegalP>
        If you consider that personal information that we hold about you is
        incorrect or outdated, you should let us know immediately by logging
        into your account and making the required changes.
      </LegalP>

      <LegalH2>14. Complaints</LegalH2>
      <LegalP>
        If you feel your privacy has been breached, please contact us using the
        contact details set out below, setting out the circumstances and
        reasons for your complaint.
      </LegalP>
      <LegalP>
        Our team members will acknowledge receipt of your complaint within 7
        days, will commence investigation into the complaint, and will advise
        you of the outcome of the investigation within 30 days. If your
        complaint is complex or otherwise requires further investigation our
        response may take additional time to finalise, and we will be in touch
        to let you know.
      </LegalP>
      <LegalP>
        If you are not satisfied with our response to your complaint, you may
        contact the Office of the Australian Information Commissioner at{" "}
        <LegalA href="https://www.oaic.gov.au">www.oaic.gov.au</LegalA> or by
        calling 1300 363 992.
      </LegalP>

      <LegalH2>15. Contacting us</LegalH2>
      <LegalP>
        If you would like to contact us in relation to this Privacy Policy or
        your personal information, including if you wish to access or correct
        your personal information, or to make a complaint, please contact us
        at:
      </LegalP>
      <LegalP>
        Email:{" "}
        <LegalA href={mail}>{SUPPORT_EMAIL}</LegalA>
      </LegalP>
      <LegalP>
        We may update our Privacy Policy from time to time. Amendments will be
        published on this page. See also our{" "}
        <Link
          href="/legal/terms-of-service"
          className="underline decoration-ink-3 underline-offset-4 transition-colors hover:text-white"
        >
          Terms of Service
        </Link>
        .
      </LegalP>
    </>
  );
}
