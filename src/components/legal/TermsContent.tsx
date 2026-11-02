import Link from "next/link";
import {
  LegalA,
  LegalH2,
  LegalOl,
  LegalP,
} from "@/components/legal/LegalArticle";
import { SUPPORT_EMAIL, legalEntity } from "@/lib/site";

const mail = `mailto:${SUPPORT_EMAIL}`;

export function TermsContent() {
  return (
    <>
      <LegalP>
        <strong className="font-medium text-white">
          {legalEntity.name} ACN {legalEntity.acn} (ABN {legalEntity.abn})
        </strong>{" "}
        (hereafter referred to as Depesch, we or our) provides a
        software-as-a-service (SaaS) platform connecting third party transport
        providers with their customers using advanced web and mobile
        technology. Customers refers to users who include but are not limited
        to travellers, guest passengers, travel arrangers, executive
        assistants, event coordinators and concierge personnel, all of whom
        are hereafter referred to as customers.
      </LegalP>
      <LegalP>
        Depesch is a software platform facilitating connection between
        travelling customers, transport providers and drivers engaged by the
        transport providers. We are not a transport company and do not conduct
        transport services or operations of any kind.
      </LegalP>
      <LegalP>
        If you have any queries or concerns about the transport services or
        operations that you access and use through Depesch’s platform, you
        should directly contact the third-party transport provider that you
        are connected to.
      </LegalP>

      <LegalH2>1. General</LegalH2>
      <LegalP>
        1.1 It is a condition of using the services provided by Depesch that
        you and any of your guest users (together referred to as, you) have
        reviewed and agree to these Terms of Service.
      </LegalP>
      <LegalP>
        1.2 These Terms of Service govern the provision of the following
        services by Depesch:
      </LegalP>
      <LegalOl>
        <li>
          access to and use of our technology platform, through a mobile
          application or web application (together,{" "}
          <strong className="font-medium text-white">Platform</strong>) that
          enables you to register, schedule, arrange and pay for transport
          services with independent third-party transport providers (
          <strong className="font-medium text-white">Transport Operators</strong>
          ); and
        </li>
        <li>
          access to and use of support services in connection with your use of
          the Platform, (together,{" "}
          <strong className="font-medium text-white">Services</strong>).
        </li>
      </LegalOl>
      <LegalP>
        By accessing or using the Services you agree to these Terms of Service.
      </LegalP>
      <LegalP>
        You must read and understand these Terms of Service fully. However,
        there are a number of specific terms that we would like to bring to
        your attention, as set out below:
      </LegalP>
      <LegalOl>
        <li>
          These Terms of Service are posted on this website and in the mobile
          app, and are subject to change from time to time at Depesch’s
          discretion. It is your responsibility to familiarise yourself with
          these Terms of Service prior to using the Services. If you do not
          agree to the current version of the Terms of Service, you should not
          use the Services (clause 12.1).
        </li>
        <li>
          To the extent permitted by the applicable laws, Depesch disclaims
          liability for any loss, damage or expense that may be suffered in
          connection with: (a) your use of the Services; (b) any information
          contained in the Platform being incorrect, incomplete or not
          up-to-date; or (c) loss or corruption of data submitted, uploaded or
          input in the Platform. This disclaimer does not apply to the extent
          the relevant loss is caused by Depesch’s negligent, fraudulent or
          unlawful act or omission (clause 9.5).
        </li>
        <li>
          To the extent permitted by the applicable laws, (a) Depesch will not
          be liable to you for any indirect or consequential loss, such as
          loss of profit or revenue; (b) in respect of any liability under the
          guarantees or warranties that cannot be excluded by law, Depesch’s
          liability is limited (at our option) to providing you services
          again, or paying you the costs of acquiring services, which are
          equivalent to those Services to which that liability relates; and
          (c) in all other cases, Depesch’s liability to you is limited to
          $5,000 (clause 9.8).
        </li>
        <li>
          You agree to indemnify Depesch for any loss, damage or expense that
          we may suffer in connection with: (a) a breach by you of these Terms
          of Service; (b) loss of, or damage to, any property or any personal
          injury or death; (c) breach by you of any law; or (d) any claim by a
          third party (including a Transport Operator), arising out of or
          relating to your use of the Services. However, this obligation will
          not apply to the extent that the relevant loss is caused by
          Depesch’s negligent, fraudulent or unlawful act or omission (clause
          10.1).
        </li>
      </LegalOl>

      <LegalH2>2. Registration and payment</LegalH2>
      <LegalP>
        2.1 As part of the Services, Depesch facilitates the registration of
        your profile with the Transport Operators through the Platform. When
        you register, you will be required to provide valid credit card
        details. This is completed by way of a link from the Platform through
        a secure gateway, to payment gateway facilities operated by Stripe
        Payments Australia Pty Ltd (
        <strong className="font-medium text-white">Stripe</strong>). Depesch
        itself does not have access to and does not store your credit card
        information, and neither does the Transport Operator you are connected
        to.
      </LegalP>
      <LegalP>
        2.2 While Depesch does not charge you fees for the Services, the use
        of the transport services arranged through the Platform will result in
        charges by the Transport Operator you are connected to. Depesch will
        facilitate the payment of Transport Operators’ charges for their
        services, any cancellation charges and other fees that may be payable
        to the Transport Operators, as well as any refunds of such charges, if
        payable by the Transport Operator to you. The agreement between you
        and the relevant Transport Operator will govern the terms of payment,
        including the amount and nature of the charges payable and your
        entitlement to refunds.
      </LegalP>
      <LegalP>
        2.3 You should keep your credit card details current at all times.
        Where any payment that you make is declined or has been unsuccessful
        for any reason, you must use a different credit card. If your payment
        is dishonoured or reversed, Depesch may charge you any fees we incur
        in connection with the dishonoured or reversed payment.
      </LegalP>
      <LegalP>
        2.4 By agreeing for your debit or credit card payment to be processed
        through Stripe’s payment gateway, you agree to Stripe collecting,
        using, retaining and disclosing the personal information in connection
        with the payment and your interaction with Stripe’s services in
        accordance with their privacy policy (which can be found on their
        website —{" "}
        <LegalA href="https://stripe.com/en-au/privacy">
          https://stripe.com/en-au/privacy
        </LegalA>
        ).
      </LegalP>

      <LegalH2>3. Location services</LegalH2>
      <LegalP>
        3.1 Where the location services functionality has been activated for
        the Platform, Depesch will be able to access information about the
        location of your device and share that information with your Transport
        Operator. This will enable the drivers engaged by the Transport
        Operator to more accurately determine the pick-up location for your
        booking.
      </LegalP>
      <LegalP>
        3.2 If you do not wish Depesch or the Transport Operators to access
        information about your location, you should de-activate the location
        services functionality by using your browser or mobile device
        settings.
      </LegalP>

      <LegalH2>4. Access from personal devices and security</LegalH2>
      <LegalP>
        4.1 If you wish to use the mobile version of the Platform, you
        acknowledge that its availability depends on a third party from which
        you obtain the mobile application (App Store). The licence to use the
        mobile version of the Platform is conditional upon your compliance
        with any App Store terms and conditions that apply.
      </LegalP>
      <LegalP>
        4.2 Access to and use of the Platform require internet access,
        including through the mobile network, if you use the Platform on your
        mobile device. You are responsible for obtaining the data network
        access necessary to use the Platform. Your mobile network’s data and
        messaging charges may apply. Such charges are your sole
        responsibility.
      </LegalP>
      <LegalP>
        4.3 Depesch is not liable for any unauthorised use of the Platform on
        your device, including for any losses you may suffer in connection
        with such unauthorised use.
      </LegalP>
      <LegalP>
        4.4 In the event your personal device is stolen, you must promptly
        contact your credit card issuer to cancel the card that you have
        registered with the Transport Operator through the Platform.
      </LegalP>

      <LegalH2>5. Limitations on your use of the Platform</LegalH2>
      <LegalP>
        5.1 You must not use the Services and the Platform in any manner that
        is not explicitly authorised by these Terms of Service. Without
        limitation, you must not, and must not allow third parties to:
      </LegalP>
      <LegalOl>
        <li>
          reverse-engineer, decompile, disassemble the Platform, or otherwise
          attempt to derive the source code of the Platform;
        </li>
        <li>
          modify, alter, or create derivative works of the Platform or of any
          content and material contained within the Platform;
        </li>
        <li>
          introduce any virus, worm, or any other malicious or harmful
          software, code, or script to the Platform or any related system,
          database, or network;
        </li>
        <li>
          attempt to gain unauthorised access to the Platform or any related
          system, database, or network. This includes, but is not limited to,
          using another person’s login credentials, hacking, or attempting to
          exploit security vulnerabilities;
        </li>
        <li>
          engage in any activity that interferes with, disrupts, or impairs
          the proper functioning of the Platform;
        </li>
        <li>
          distribute, rent, lease, sell, sublicense the Platform to any third
          party, or seek to otherwise commercialise the Platform; or
        </li>
        <li>
          remove or obscure any proprietary notice (including any copyright or
          trademark), logos or other notices contained in the Platform.
        </li>
      </LegalOl>
      <LegalP>
        5.2 You acknowledge and agree that you are solely responsible for all
        content provided by you or posted through Depesch’s Platform,
        including but not limited to feedback, ratings, and reviews of the
        drivers of the Transport Operators. You must not use the Services, or
        provide or transmit any data or content through the Platform, in a
        manner that:
      </LegalP>
      <LegalOl>
        <li>
          infringes upon or violates any intellectual property rights of a
          third party. This includes, but is not limited to, submitting
          content without proper authorisation, using copyrighted materials
          without permission, or impersonating others;
        </li>
        <li>
          is unlawful, offensive, indecent, objectionable, harassing, obscene,
          threatening, abusive, defamatory, fraudulent, tortious, or invasive
          of another’s privacy or constitutes a breach of any other legal
          rights of an individual;
        </li>
        <li>is false or misleading; or</li>
        <li>violates any applicable laws.</li>
      </LegalOl>
      <LegalP>
        5.3 If you become aware of any misuse, unauthorised access, or other
        violation of the limitations set in this section 5, you must promptly
        report such activity to Depesch.
      </LegalP>
      <LegalP>
        5.4 Depesch reserves the right to remove your content from the
        Platform, if such content violates these Terms of Service or any
        applicable laws, or if Depesch deems it, in our sole discretion, to be
        inappropriate or offensive.
      </LegalP>

      <LegalH2>6. Termination and suspension</LegalH2>
      <LegalP>
        6.1 You can cease to access and use the Platform or the Services at
        any time.
      </LegalP>
      <LegalP>
        6.2 Depesch may, at our election and without notice to you, terminate
        these Terms of Service or suspend and/or block your access to the
        Platform or Services if you:
      </LegalP>
      <LegalOl>
        <li>
          misuse the Platform or otherwise breach any term of these Terms of
          Service;
        </li>
        <li>
          commit a fraud or engage in other type of misconduct in connection
          with the Services; or
        </li>
        <li>
          breach the terms of service of the Transport Operator that you
          connect to.
        </li>
      </LegalOl>
      <LegalP>
        6.3 You acknowledge and agree that the termination of these Terms of
        Service does not affect any agreement you may have with the Transport
        Operator that you connect to. Without limitation, any charges that
        accrue, but are not paid as at the termination of these Terms of
        Service will remain due and payable.
      </LegalP>

      <LegalH2>7. Intellectual property rights</LegalH2>
      <LegalP>
        7.1 Subject to your compliance with these Terms of Service, Depesch
        grants you a non-transferable, non-exclusive, non-sublicensable,
        royalty-free licence to access and use the Platform during the term of
        these Terms of Service, as authorised by Depesch or Depesch’s third
        party licensors, where applicable.
      </LegalP>
      <LegalP>
        7.2 You may from time to time provide Depesch with suggestions, ideas,
        information, comments, or other information (together,{" "}
        <strong className="font-medium text-white">Feedback</strong>). You
        absolutely and unconditionally assign to Depesch all rights, title and
        interests (including all intellectual property rights) in and to any
        Feedback immediately upon creation, free of all encumbrances.
      </LegalP>
      <LegalP>
        7.3 All material on the Platform and elsewhere on Depesch’s website
        (together, <strong className="font-medium text-white">Site</strong>)
        is copyright protected or otherwise the subject of intellectual
        property rights owned by Depesch, our related bodies corporate or our
        third party licensors. Any infringement of such intellectual property
        rights will be prosecuted to the full extent permitted by law. The
        trademarks and logos used in the Site are registered trademarks of
        Depesch or our related bodies corporate, or are otherwise used under
        license from others. Persons accessing the Site are not by doing so
        granted any licence or other right to use in any way any trademark or
        logo displayed on the Site without prior written permission of the
        owner.
      </LegalP>
      <LegalP>
        7.4 The materials in the Site are provided without warranties of any
        kind, either express or implied. You specifically agree that Depesch
        and each of our related bodies corporate and affiliated entities,
        shareholders, officers, directors, employees, agents is not liable for
        any defamatory, offensive or illegal conduct of any other user. If you
        are dissatisfied with the Site, or any materials on the Site, your
        sole and exclusive remedy is to discontinue using the Site.
      </LegalP>

      <LegalH2>8. Privacy</LegalH2>
      <LegalP>
        8.1 Depesch collects, uses and discloses your personal information in
        accordance with our{" "}
        <Link
          href="/legal/privacy-policy"
          className="underline decoration-ink-3 underline-offset-4 transition-colors hover:text-white"
        >
          Privacy Policy
        </Link>
        .
      </LegalP>

      <LegalH2>9. Warranties and liability</LegalH2>
      <LegalP>
        9.1 You warrant and represent that you have made your own inquiries as
        to the suitability of the Platform and Services for your own
        requirements and have not relied on any warranties or representations
        by Depesch in relation to the performance or suitability of the
        Platform and Services.
      </LegalP>
      <LegalP>
        9.2 Depesch reiterates that we do not provide transport services to
        you and have no liability or responsibility for the transport
        services, as well as any related services, that may be provided to you
        by Transport Operators or by the drivers engaged by the Transport
        Operators.
      </LegalP>
      <LegalP>
        9.3 Nothing in these Terms of Service limits or excludes any
        guarantees, warranties, representations or conditions implied or
        imposed by law, including the Australian Consumer Law or any other
        applicable laws which cannot be excluded, restricted or modified (
        <strong className="font-medium text-white">Non-Excludable Guarantees</strong>
        ). All other warranties, undertakings, inducements or representations,
        whether express or implied, are expressly excluded.
      </LegalP>
      <LegalP>
        9.4 To the fullest extent permitted by law, Depesch’s liability for a
        breach of a Non-Excludable Guarantee is limited, at our option, to
        re-supplying of the services to which the liability relates, or the
        payment of the cost of having the services supplied again.
      </LegalP>
      <LegalP>
        9.5 You acknowledge and agree that, to the maximum extent permitted by
        law:
      </LegalP>
      <LegalOl>
        <li>
          the Services, including the Platform, are provided on an “as is” and
          “as available” basis. While Depesch will use reasonable commercial
          efforts to ensure the Platform is available and operational at all
          times, we are not under any obligation to ensure uninterrupted and
          continuous availability and accessibility of the Platform and will
          not be liable to you if the Platform is not available, or if your
          access is restricted, suspended or terminated at any time or for any
          period;
        </li>
        <li>
          Depesch makes no warranties or representations about the Services,
          including, but not limited to, warranties or representations that:
          (i) any data uploaded, submitted, input into, or otherwise displayed
          in the Platform will not be lost or corrupted; or (ii) the Platform
          will be free from errors, bugs, viruses or other harmful components.
        </li>
      </LegalOl>
      <LegalP>
        9.6 Depesch will not be liable for any and all claims, actions,
        demands, proceedings, liabilities, losses, damages, expenses and costs
        (together, <strong className="font-medium text-white">Loss</strong>)
        that you may suffer that arises from or in connection with:
      </LegalP>
      <LegalOl>
        <li>your use of the Services;</li>
        <li>
          the information or materials contained in the Platform being
          incorrect, incomplete or not up-to-date; or
        </li>
        <li>
          the Platform containing errors, bugs, viruses or other harmful
          components,
        </li>
      </LegalOl>
      <LegalP>
        except to the extent that the Loss is caused by a negligent,
        fraudulent or unlawful act or omission of Depesch, our employees or
        agents.
      </LegalP>
      <LegalP>
        9.7 You agree that, to the extent permitted by the applicable law and
        subject to clause 9.3 above, any liability of Depesch that is not
        excluded under these Terms of Service, will be limited as follows:
      </LegalP>
      <LegalOl>
        <li>
          Depesch will not be liable for any special or punitive damages, or
          indirect, incidental, economic or consequential loss (including,
          without limitation, loss of profits, revenue, loss or corruption of
          data, loss of reputation, opportunity or goodwill) suffered or
          incurred by you or a party related to you, arising out of or in
          connection with the provision of the Services or the use of the
          Platform, whether in an action in tort (including negligence),
          public liability, under statute or contract, and whether or not such
          loss or damage was foreseeable, even if advised of the possibility
          of the loss or damage; and
        </li>
        <li>
          our liability for any Loss arising out of or in connection with
          these Terms of Service or a supply of the Services to you, whether
          for breach, in tort (including negligence) or for any other common
          law or statutory cause of action is, in the aggregate, limited to
          $5,000.
        </li>
      </LegalOl>
      <LegalP>
        9.8 Our liability to you for Loss of any kind arising out of these
        Terms of Service or in connection with the Services will be reduced to
        the extent (if any) that you cause or contribute to the Loss. This
        reduction applies whether our liability is in contract, tort
        (including negligence), under any statute or otherwise.
      </LegalP>

      <LegalH2>10. Indemnities</LegalH2>
      <LegalP>
        10.1 You agree to indemnify us, our related entities and our officers,
        employees and contractors (collectively,{" "}
        <strong className="font-medium text-white">Indemnified Parties</strong>
        ) from and against any Loss that may be brought against the
        Indemnified Parties or which the Indemnified Parties may otherwise
        incur or suffer as a result of or in connection with:
      </LegalP>
      <LegalOl>
        <li>breach by you of any of the terms of these Terms of Service;</li>
        <li>
          loss of, or damage to, any property or any personal injury or death
          arising out of or in connection with your use of the Services;
        </li>
        <li>
          breach by you of any law in connection with the use of the Services;
          or
        </li>
        <li>
          any claim by a third party (including a Transport Operator) arising
          out of or relating to your use of the Services,
        </li>
      </LegalOl>
      <LegalP>
        except to the extent that the Loss was caused by a negligent,
        fraudulent or unlawful act or omission of any of the Indemnified
        Parties.
      </LegalP>

      <LegalH2>11. Force majeure</LegalH2>
      <LegalP>
        11.1 Depesch accepts no liability for any failure to perform any of
        our obligations under these Terms of Service or any delay in
        performing such obligations caused by an event beyond our reasonable
        control, such as acts of God, war, terrorism, riots, strikes,
        lockouts, industrial action, fire, flood, storm, earthquake, natural
        disasters, pandemic or epidemic, power outages, or other similar
        events.
      </LegalP>
      <LegalP>
        11.2 If such an event occurs, Depesch will take reasonable steps to
        notify you, where possible, by posting a notice on the Platform.
      </LegalP>

      <LegalH2>12. General provisions</LegalH2>
      <LegalP>
        12.1 Amendments: Depesch reserves the right, at any time, to modify,
        alter or update these Terms of Service at our discretion. The current
        version of these Terms of Service is posted on this website and in the
        mobile app. It is your responsibility to familiarise yourself with
        these Terms of Service prior to using the Services. If you do not
        agree to the current version of the Terms of Service, you should not
        use the Services.
      </LegalP>
      <LegalP>
        12.2 Severability: If any provision of these Terms of Service is or
        becomes unlawful, void, or unenforceable, then that provision shall be
        deemed severable from these Terms of Service and shall not affect the
        validity and enforceability of any of the remaining provisions.
      </LegalP>
      <LegalP>
        12.3 Waiver: You acknowledge and agree that Depesch’s failure to
        exercise or enforce any right or provision set out in these Terms of
        Service will not constitute a waiver of such right or provision. No
        waiver by Depesch of any breach or default under these Terms of
        Service will be considered valid unless it is provided in writing, and
        any such waiver shall not be construed as a waiver of any subsequent
        breach or default.
      </LegalP>
      <LegalP>
        12.4 Survival: Clauses 6.3, 7 to 10, 12 and any other clauses which
        should by their nature survive termination of these Terms of Service,
        survive termination or expiry of these Terms of Service for any reason
        whatsoever.
      </LegalP>
      <LegalP>
        12.5 Assignment: Depesch may transfer, assign, novate, charge,
        subcontract or otherwise deal with these Terms of Service, or any of
        our rights or obligations arising under these Terms of Service, at any
        time.
      </LegalP>
      <LegalP>
        12.6 Governing law and jurisdiction: This agreement is governed by and
        shall be construed in accordance with the laws of the state of New
        South Wales. Each party submits to the non-exclusive jurisdiction of
        the courts of New South Wales. This clause does not apply to any
        claims that you may have under the Australian Consumer Law, as your
        entitlement to rights and remedies under the Australian Consumer Law
        exist separately and independently of these Terms of Service.
      </LegalP>
      <LegalP>
        12.7 Entire agreement: These Terms of Service are the entire agreement
        between the parties with respect to their subject matter.
      </LegalP>
      <LegalP>
        If you have questions about these Terms of Service, contact us at{" "}
        <LegalA href={mail}>{SUPPORT_EMAIL}</LegalA>.
      </LegalP>
    </>
  );
}
