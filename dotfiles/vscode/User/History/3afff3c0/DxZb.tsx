import { NextSeo } from 'next-seo';
import Link from 'next/link';
import React from 'react';
import {
  BodyLink,
  Box,
  Footer,
  Header,
  PageContainer,
  Typography,
  TypographyRhythm,
} from '../../components/sormus';
import { termsAndConditions } from '../../data-mock/page-details/terms-and-conditions';
import { useLocale } from '../../public/locales/LocaleContext';

const Page = () => {
  const { selectedLocale } = useLocale();
  console.log({ selectedLocale });
  return (
    <div className="tailwind">
      <div className="bg-white">
        <NextSeo {...termsAndConditions.seoParams} />
        <Header bordered />
        <PageContainer name="terms-and-conditions" padding="both">
          <Box className={`max-w-3xl`}>
            <TypographyRhythm>
              <>
                <Typography Element="h1" variant="super">
                  ŌURA TERMS OF USE
                </Typography>
                <Link href="/gen2-terms-and-conditions">
                  <BodyLink color="inherit">
                    Previous Terms and Conditions
                  </BodyLink>
                </Link>
                <Typography>
                  <em>Last Updated: October 26, 2021</em>
                </Typography>
                <Typography>
                  Welcome and thank you for your interest in Ōura! These Terms
                  of Use (the “Agreement”) describe the terms and conditions
                  applicable to your use of ouraring.com (the “Site”), the smart
                  ring, charger, and/or other electronic device(s) (the
                  “Products”), including the Ōura mobile application (the
                  “Mobile App”) (collectively, the “Services”). The Site and
                  Mobile App are owned and operated by{' '}
                  <strong>Ōura Health Oy</strong>, and its affiliates and
                  subsidiaries, such as Ouraring Inc. (collectively “Ōura” or
                  “Oura”).
                </Typography>
                <Typography>
                  In this Agreement, we refer to ourselves as “Ōura” or “Oura”
                  or “us” or “we”; we refer to you as “you” or “Customer.” Oura
                  and Customer are referred to in this Agreement individually as
                  a “Party” and collectively as the “Parties.”
                </Typography>
                <Typography>
                  By accessing or using the Services, including access of the
                  Site, you intend and expressly agree to be bound by all the
                  terms and conditions of this Agreement and the Privacy Policy
                  (available at{' '}
                  <Link href="/privacy-policy">
                    <BodyLink color="inherit">
                      ouraring.com/privacy-policy
                    </BodyLink>
                  </Link>
                  ), which is incorporated by reference. If you do not agree to
                  these terms and conditions, you may not use the Services.
                </Typography>
                <Typography Element="h2" variant="h3">
                  Access and Use
                </Typography>
                <Typography>
                  Oura grants you a limited license to access the Site subject
                  to this Agreement. If you choose to subscribe to and use the
                  Mobile App, Oura further grants you a license to access and
                  use the Services, subject to and conditioned upon your
                  compliance with this Agreement, the Privacy Policy, and any
                  other rules and requirements communicated to you by Oura,
                  including your payment of any applicable fees. You acknowledge
                  and agree that Oura may modify, update, and otherwise change
                  the Services at any time and in its sole discretion.
                </Typography>
                <Typography>
                  You represent and warrant that you are at least 18 years of
                  age and have the legal authority to accept this Agreement on
                  your behalf or on behalf of any party you represent. You alone
                  are responsible for your activities and interaction with the
                  Services.
                </Typography>
                <Typography>
                  You shall not use the Services for any purposes beyond the
                  scope of the access granted in this Agreement. You shall not
                  at any time, directly or indirectly, and shall not permit any
                  third-party to: (i) copy, modify, or create derivative works
                  of the Services, in whole or in part; (ii) reverse engineer,
                  disassemble, decompile, decode, adapt, or otherwise attempt to
                  derive or gain access to any Mobile App component of the
                  Services, in whole or in part; or (iii) use the Services in
                  any manner or for any purpose that infringes, misappropriates,
                  or otherwise violates any intellectual property right or other
                  right of any person (including but not limited to web
                  scraping), or that otherwise violates any law, regulation, or
                  other legal requirement.
                </Typography>
                <Typography>
                  Purchases are intended for you as the end user only and are
                  not authorized for resale, without Oura’s express
                  authorization. We reserve the right to refuse or cancel your
                  order if we suspect you are purchasing Services for resale.
                  Title for Products purchased from Oura passes to you at the
                  time of delivery by Oura or our designated carrier.
                </Typography>
                <Typography>
                  Except for the limited license to access the Site and Mobile
                  App identified above, you acknowledge that nothing contained
                  in this Agreement shall be construed as granting or
                  conferring, by implication, estoppel, or otherwise, any right,
                  title, or interest to any intellectual property, including any
                  (i) inventions (whether patentable or not in any country),
                  patents, patent applications, invention disclosures,
                  improvements, trade secrets, proprietary information, know
                  how, information, or technical data; (ii) copyright protected
                  works, copyright registrations, mask works, mask work
                  registrations, or applications in the United States or any
                  foreign country; (iii) trademarks, trademark registrations,
                  service marks, logos, or applications therefor in the United
                  States or any foreign country; (iv) trade secrets; or (v) any
                  other tangible or intangible proprietary rights anywhere in
                  the world.
                </Typography>
                <Typography>
                  You acknowledge and agree that at times the Services may be
                  inaccessible or inoperable for any reason whatsoever,
                  including, without limitation: (i) equipment malfunctions;
                  (ii) periodic maintenance procedures or repairs which Oura may
                  undertake from time to time without notice to you; or (iii)
                  causes which are beyond the control of Oura or which are not
                  reasonably foreseeable.
                </Typography>
                <Typography>
                  Notwithstanding anything to the contrary in this Agreement,
                  Oura may temporarily suspend access to the Services provided
                  to you and any other third-party for security purposes, to
                  prevent illegal or fraudulent activity, to comply with the
                  requests of any legal agency or government entity, or if you
                  violate the Agreement or the Privacy Policy.
                </Typography>
                <Typography>
                  Oura may from time to time and in its sole discretion engage
                  other service providers to assist in the performance of the
                  Services, such as web hosting providers, payment processors,
                  and other third-parties. You shall abide by the terms of use
                  and other requirements associated with the services provided
                  by such third-parties in connection with the Services.
                </Typography>
                <Typography Element="h2" variant="h3">
                  Customer Responsiblities
                </Typography>
                <Typography>
                  You acknowledge that you are solely responsible and liable for
                  your use of the Services, directly or indirectly, including
                  understanding whether such access or use is permitted by or in
                  violation of this Agreement. You are further solely
                  responsible for compliance with all applicable laws relating
                  to your use of the Services. You shall further use the
                  Services solely for lawful purposes, and shall conduct all
                  business through the Services in accordance with all
                  applicable laws and regulations, including but not limited to
                  all applicable federal and state laws and regulations
                  governing the offer and sale of securities, money laundering,
                  and counter-terrorism.
                </Typography>
                <Typography>
                  You alone are responsible for ensuring and maintaining that
                  you are able to access and use the Services, including by
                  securing your own compatible hardware, Mobile App, internet
                  access, security Mobile App, backup devices or services, and
                  any other requirements. Oura shall have no responsibility to
                  provide any additional Mobile App or hardware. You further
                  agree that Oura shall have no responsibility for any data loss
                  or other damage or loss suffered in connection with your use
                  of the Services, including any failure to provide adequate
                  security or backup devices or services.
                </Typography>
                <Typography>
                  You are responsible for ensuring Oura has accurate and current
                  information for your Customer account, including current
                  contact and payment information. You are further responsible
                  for regularly reviewing the associated Customer email account
                  for any communications from Oura.
                </Typography>
                <Typography>
                  If you are provided with a username, password, credentials
                  file, or any other piece of information as part of any
                  security procedure (“Credentials”), you must treat such
                  information as confidential, and must not disclose Credentials
                  to any other person or entity. You acknowledge that your
                  account and Credentials are personal to you, and further agree
                  not to provide any other person with access to the Services or
                  portions of the Services using your username, password, or
                  other security information. You shall notify Oura immediately
                  of any unauthorized access to or use of your Credentials or
                  any other breach of security. Oura has the right to disable
                  any username, password, credentials file, or other identifier
                  at any time, whether chosen by you or provided by Oura.
                </Typography>
                <Typography>
                  Oura shall make commercially reasonable efforts to provide
                  adequate support services for the Services. Notwithstanding
                  the foregoing, this Agreement does not entitle you to any
                  guaranteed level, availability, or turnaround time of support
                  services for the Services.
                </Typography>
                <Typography Element="h2" variant="h3">
                  Payment and Fees
                </Typography>
                <Typography>
                  Paid Services include the Services, which may be one-time
                  purchases or automatically renewing subscription services
                  (“Paid Services”), including our Site and Mobile App
                  (“Subscriptions”). We may make changes to, suspend, or
                  discontinue Paid Services at any time for any reason, and Oura
                  reserves the sole discretion to determine which Services or
                  portions thereof require payment.
                </Typography>
                <Typography>
                  Paid Services may include pre-ordered Products that will be
                  produced for you in the future (“Pre-Order”). You will be
                  charged a Pre-Order fee when placing your Pre-Order. The
                  actual date for shipping any accepted Pre-Order will depend on
                  a variety of factors, including but not limited to, the date
                  of payment of your Pre-Order fee and Oura’s manufacturing
                  schedule. There is no shipping date guarantee for Pre-Orders.
                </Typography>
                <Typography>
                  You agree to pay all applicable fees for Paid Services
                  including, without exclusion, any monthly subscription fees,
                  user fees, and offering fees and any other fees, charges, or
                  costs that you agree to purchase as part of the Paid Services
                  during the checkout process (“Fees”). You agree to pay all
                  Fees and all applicable taxes incurred prior to termination or
                  cancellation of the Agreement.
                </Typography>
                <Typography>
                  You authorize Oura to charge your designated payment method
                  for Paid Services. By providing an acceptable payment method,
                  you represent and warrant that you are authorized to use the
                  designated payment method and that you authorize us or our
                  third-party payment processor to charge your payment method
                  for the total amount of your purchase, including any
                  applicable taxes and other charges. If the payment method
                  cannot be verified, is invalid, or is otherwise not
                  acceptable, your Paid Service may be suspended or canceled.
                  You must resolve any problem we encounter in relation to the
                  payment method you provide in order to proceed with your use
                  of the Service. If you accept a promotional offer or make
                  changes to your Paid Services, the Fees, taxes, and amounts
                  billed may vary. Billing amounts may also vary due to changes
                  in applicable taxes or currency exchange rates. You authorize
                  us or our third-party payment processor to charge your payment
                  method for the corresponding amount. Refunds will not be
                  issued unless required by law. This payment obligation shall
                  survive termination or cancellation of this Agreement for any
                  reason whatsoever.
                </Typography>
                <Typography>
                  If you choose to finance a purchase through our third-party
                  payment processor and one or more items in your order has an
                  extended ship date, your loan payment(s), including interest,
                  may be due before we ship all of the items. Please note that
                  you may not receive a rebate of any interest that may have
                  already accrued on an amount that is later refunded.
                </Typography>
                <Typography Element="h2" variant="h3">
                  Subscriptions
                </Typography>
                <Typography>
                  Certain Paid Services are subscription-based purchases, to
                  which the following terms apply:
                </Typography>
                <Typography>
                  <strong>
                    Your Subscription term may vary as a continuous, monthly, or
                    annual term (“Subscription Term(s)”), as described in the
                    course of purchasing the Paid Services. Your Subscription
                    will auto-renew for additional Subscription Terms until your
                    Subscription is cancelled by you, or suspended or terminated
                    by Oura. Unless otherwise indicated by us, your designated
                    payment method will be charged prior to, or at the beginning
                    of, each Subscription Term for the Subscription fee plus any
                    applicable taxes and other charges. Before charging you for
                    a Subscription Term, we will notify you of the applicable
                    fees, and the renewal will occur at the price then in effect
                    for the Paid Service.
                  </strong>
                </Typography>
                <Typography>
                  <strong>
                    You may cancel your Subscription at any time. Your
                    cancellation will take effect at the end of the current
                    Subscription Term. To cancel your subscription and automatic
                    payment, click on the “Cancel Account” button from your
                    account screen or contact our team by visiting{' '}
                    <BodyLink
                      href="https://support.ouraring.com/hc/en-us"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      support.ouraring.com
                    </BodyLink>{' '}
                    and submitting a ticket. Cancellation does not entitle you
                    to the refund of any previously paid Fees and you will not
                    receive a proratedrefund for the remainder of the
                    Subscription Term. In the event you cancel your
                    Subscription, note that we may still send you promotional
                    communications, unless you opt out of receiving those
                    communications by following the unsubscribe instructions
                    provided in the communications.
                  </strong>
                </Typography>
                <Typography>
                  <strong>
                    When you cancel a Subscription, you cancel only future
                    charges for your Subscription. You will not receive a refund
                    for the current Subscription Term you paid for, but you will
                    continue to have full access to that Subscription until the
                    end of that current Subscription Term.
                  </strong>{' '}
                  At any time for any reason, we may provide a refund, discount,
                  or other consideration (“credits”) to some or all of our
                  users. The amount and form of such credits, and the decision
                  to provide them, are at our sole and absolute discretion. The
                  provision of credits in one instance does not entitle you to
                  credits in the future for similar instances, nor does it
                  obligate us to provide credits in the future.
                </Typography>
                <Typography>
                  If you reside outside the United States and change your mind
                  about your purchase, you may be entitled to receive a full
                  refund within fourteen (14) days (the “Cooling-Off Period”),
                  provided that you have not logged in or otherwise redeemed or
                  started to use the Services as a subscriber during the
                  Cooling-Off Period.
                </Typography>
                <Typography>
                  From time to time, we may offer free trials of certain
                  Subscriptions for specified periods of time without payment.{' '}
                  <strong>
                    Prior to starting your free trial we will notify you of the
                    applicable Subscription fees that will be charged at the
                    expiration of your free trial. Unless you cancel your
                    Subscription prior to the end of your free trial by taking
                    the steps outlined above, when your free trial ends, we or
                    our third-party payment processor will bill your designated
                    payment method on a recurring basis for your Subscription
                    fee, plus any applicable taxes and other charges, for as
                    long as your Subscription continues. You must cancel your
                    Subscription before the end of your free trial period to
                    avoid any charges. Instructions for canceling your
                    Subscription are described above.{' '}
                  </strong>
                </Typography>
                <Typography>
                  Your payment information will be processed and stored through
                  a third-party payment processor. All paid account holders must
                  maintain at least one valid payment method for payment of
                  Fees, which are described in more detail during checkout. All
                  Fees are calculated and billed to you on a monthly or annual
                  basis depending upon your choice, and are due immediately upon
                  receipt and are subject to change. You acknowledge that Fees
                  have a recurring payment feature and you accept responsibility
                  for all recurring charges prior to cancellation. Fees shall be
                  charged or debited from the saved, designated payment method
                  you provide one day prior to the monthly or yearly anniversary
                  of the initial purchase date.
                </Typography>
                <Typography>
                  In the event that you have not logged in or otherwise used the
                  Services for six (6) months or longer following purchase or
                  receipt of a Product during a free trial, we reserve the right
                  to terminate your subscription, cancel any pending
                  purchase(s), and refund you the purchase price of the Product
                  only. You will not be entitled to a refund for the value of
                  the Subscription during the free trial.
                </Typography>
                <Typography>
                  Oura reserves the right to adjust the Fees for our Paid
                  Services, or any features or parts of our Paid Services, at
                  any time. You acknowledge that Oura may change the Fees for
                  Paid Services at any time. In the event of such a change, Oura
                  will provide notice to you via the email address associated
                  with your account at least thirty (30) days in advance of the
                  effective date of the change. Your continued use of the
                  Services indicates your acceptance of any changes to the Fees.
                  You are solely responsible for all applicable taxes, and will
                  be charged for taxes when required by law.
                </Typography>
                <Typography Element="h2" variant="h3">
                  Data and Communications
                </Typography>
                <Typography>
                  Oura may collect and process information regarding your usage
                  of the Services. You consent to Oura’s collection and use of
                  such information, as well as the sharing of such information
                  with third-party service providers for purposes of providing,
                  marketing, and improving the Services, and any other reason
                  described in the Privacy Policy. All personal information
                  collected by Oura is treated in accordance with the
                  <Link href="/privacy-policy">
                    <BodyLink color="inherit">Privacy Policy</BodyLink>
                  </Link>
                  .
                </Typography>
                <Typography>
                  <strong>
                    By agreeing to the terms and conditions in this Agreement
                    and providing your contact information to Oura, you give
                    your express consent to allow Oura, its affiliates, and
                    agents to contact you from time to time at any mailing
                    address, phone number, or email address you provide to Oura.
                  </strong>{' '}
                  Your consent means you agree to be contacted by Oura and its
                  service providers via phone, email, text message, or other
                  means for any purpose, including but not limited to
                  notifications related to the Services and your account,
                  subscriptions, purchases, available upgrades, billing and
                  payment processing issues, and telemarketing communications.
                  Such authorized communications may include use of automated
                  dialing technology or the use of pre-recorded messages. You
                  are responsible for any charges that may be billed to you by
                  your service provider(s) when we contact you. You further
                  acknowledge that your consent to the foregoing is not a
                  condition of using the Oura Services, and if you do not wish
                  to consent, you may contact us and request to be placed on a
                  do not contact list, or you may opt out any time using the
                  opt-out mechanism provided in any such communications.
                </Typography>
                <Typography>
                  Oura disclaims all liability under this Agreement for any
                  information you provide to Oura that may constitute electronic
                  patient health records or similar information supplied by you
                  or an end user, notwithstanding anything to the contrary in
                  this Agreement or as otherwise required by any applicable
                  federal, state, or international laws, rules, or regulations.
                </Typography>

                <Typography Element="h2" variant="h3">
                  Intellectual Property Rights
                </Typography>
                <Typography>
                  ŌURA, Ō, and OURA are trademarks of Ōura Health Oy. Oura
                  Content, Oura Products, Oura features and Services, and our
                  underlying technology are protected by copyright, trademark,
                  patent, intellectual property, and other laws of the United
                  States and foreign countries. All rights reserved. You are not
                  granted, by implication or otherwise, any license or right to
                  use any marks appearing on, or used or displayed in connection
                  with, the Services (“Trademarks”). The Services may also
                  contain or refer to third-party trademarks, trade names,
                  product names, and logos that may be registered trademarks of
                  their respective owners. Under no circumstances may you use or
                  copy any of the Trademarks. Nothing herein should be construed
                  as granting any license or right to use any Trademarks
                  displayed in connection with the Services without Oura’s
                  express written permission.
                </Typography>
                <Typography>
                  All content provided in association with the Services and this
                  Agreement, including, but not limited to, the Site, the
                  Product, the Mobile App, all text, graphics, user interfaces,
                  visual interfaces, photographs, images/video, electronic art,
                  sounds/audio, data, communications programs, executable code,
                  computer code, and data (collectively, “Content”) formatted,
                  organized, and collected in a variety of forms, including
                  design, structure, selection, coordination, expression, “look
                  and feel,” arrangement, layouts, pages, screens, and databases
                  of such Content, contained in the Content, Services, and
                  underlying technology, and any and all other
                  copyright-protected work associated with the Services
                  (“Copyrighted Works”), are exclusively owned, controlled, or
                  licensed by or to Oura and are protected by U.S. and
                  international copyright laws. You agree you will not directly
                  or indirectly copy, reproduce, modify, create derivative works
                  from, distribute, or publicly display the Copyrighted Works
                  without the prior express written permission of Oura.
                </Typography>
                <Typography>
                  If you provide any communications or materials to Oura by
                  mail, email, telephone, or otherwise, suggesting or
                  recommending changes to the Services, including without
                  limitation, new features or functionality relating thereto, or
                  any comments, questions, suggestions, or the like
                  (“Feedback”), Oura is free to use such Feedback irrespective
                  of any other obligation or limitation between the Parties
                  governing such Feedback. Oura is free to use, without any
                  attribution or compensation to any party, any ideas, know-how,
                  concepts, techniques, or other intellectual property rights
                  contained in the Feedback, for any purpose whatsoever,
                  although Oura is not required to use any Feedback.
                </Typography>
                <Typography>
                  Oura respects the intellectual property rights of others and
                  it is our policy to expeditiously process and review notices
                  of claimed infringement of copyright or other applicable
                  intellectual property laws. Any notices of claimed
                  infringement should be sent to Oura’s Designated Agent at
                  ip@ouraring.com, and must contain all of the following: (i) a
                  signature (physical or electronic) of the copyright owner or a
                  person authorized to act on behalf of the copyright owner;
                  (ii) a description of the copyrighted work that you claim has
                  been infringed; (iii) a description of the material that you
                  claim is infringing and is to be removed or have access to
                  same disabled, and information sufficient to permit Oura’s
                  administrators to locate the material; (iv) information
                  sufficient for us to contact you, such as address, telephone
                  number, and email address; (v) a statement that you have a
                  good faith belief that use of the material in the manner
                  complained of is not authorized by the copyright owner, its
                  agent, or the law; and (vi) a statement that the information
                  in the notification is accurate and, under penalty of perjury,
                  that you are the copyright owner or are authorized to act on
                  behalf of the owner of a copyright that is allegedly
                  infringed.
                </Typography>

                <Typography Element="h2" variant="h3">
                  Warranty Disclaimer
                </Typography>
                <Typography>
                  THE SERVICES ARE PROVIDED TO YOU “AS IS WITH ALL FAULTS” AND
                  “AS AVAILABLE” WITHOUT WARRANTY OF ANY KIND, AND OURA AND ITS
                  SUBSIDIARIES, AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES,
                  REPRESENTATIVES, AGENTS, PARTNERS, AND LICENSORS HEREBY
                  DISCLAIM ALL WARRANTIES AND CONDITIONS WITH RESPECT TO THE
                  SERVICES WHETHER EXPRESS OR IMPLIED AND EXPRESSLY DISCLAIMS
                  ANY IMPLIED WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR
                  A PARTICULAR PURPOSE, SATISFACTORY QUALITY, AND
                  NON-INFRINGEMENT. OURA DOES NOT WARRANT AGAINST INTERFERENCE
                  WITH YOUR ENJOYMENT OF THE SERVICES, THE AVAILABILITY OF
                  CONTENT, THAT THE FUNCTIONS CONTAINED IN THE SERVICES WILL
                  MEET YOUR REQUIREMENTS, THAT THE SERVICES WILL BE FREE OF
                  VIRUSES OR OTHER HARMFUL COMPONENTS, THAT THE OPERATION OF THE
                  SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS IN
                  THE SERVICES WILL BE CORRECTED, OR THAT THE FUNCTIONS
                  CONTAINED IN THE SERVICES WILL FUNCTION WITH OTHER MOBILE APPS
                  OR HARDWARE, OR WITHIN A SYSTEM. NO ORAL OR WRITTEN
                  INFORMATION OR ADVICE GIVEN BY OURA OR AN OURA AUTHORIZED
                  REPRESENTATIVE SHALL CREATE A WARRANTY. SOME JURISDICTIONS DO
                  NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES OR LIMITATIONS
                  ON APPLICABLE STATUTORY RIGHTS OF A CONSUMER, SO THE ABOVE
                  EXCLUSION MAY NOT APPLY.{' '}
                </Typography>
                <Typography>
                  NOTWITHSTANDING THE FOREGOING, OURA WARRANTS TO THE ORIGINAL
                  END USER PURCHASER THAT THE PRODUCT IS FREE FROM DEFECTS IN
                  MATERIAL AND WORKMANSHIP FOR ONE (1) YEAR FROM THE DATE OF
                  PURCHASE. If your local law in effect at the time of purchase
                  requires a warranty period longer than one (1) year, this
                  warranty shall be extended to the extent required by such law.
                  Within the warranty period, Oura shall repair or replace at no
                  charge to you any components of the Product that fail the
                  limited warranty provided. You shall be responsible for any
                  related transportation charges. Replacement products may be
                  new or refurbished at our discretion. This limited warranty
                  does not apply to (i) normal wear and tear, including
                  scratches and dents; (ii) consumable parts included in the
                  Product, such as batteries, unless product damage has occurred
                  due to a defect in materials or workmanship; (iii) damage
                  resulting from your failure to use the Product in accordance
                  with the instructions accompanying the Ōura Product or
                  available at the website; (iv) damage resulting from an
                  accident, flood, fire, misuse, or abuse; (v) damage resulting
                  from service performed, or damage resulting from tampering
                  with or alterations to the Product, by anyone not authorized
                  by Ōura; or (vi) use of the Product with any application or
                  software other than the Mobile App.
                </Typography>
                <Typography>
                  Oura retains the exclusive right to repair or replace the
                  Product, or offer a full refund, at its sole discretion. Such
                  remedy shall be your sole and exclusive remedy for any breach
                  of this limited warranty. Warranty repairs and replacements
                  have a new warranty which is the longer of ninety (90) days or
                  the balance of the original one (1) year warranty.
                </Typography>

                <Typography Element="h2" variant="h3">
                  Limitation of Liability
                </Typography>
                <Typography>
                  IN NO EVENT WILL OURA, ITS SUBSIDIARIES, AFFILIATES, OFFICERS,
                  DIRECTORS, EMPLOYEES, REPRESENTATIVES, AGENTS, PARTNERS, AND
                  LICENSORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL
                  THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR
                  INABILITY TO USE, THE SERVICES OR ANY CONTENT ASSOCIATED WITH
                  THE SERVICES, OR SUCH OTHER SITES OR ANY SERVICES OR ITEMS
                  OBTAINED THROUGH THE SERVICES, INCLUDING ANY DIRECT, INDIRECT,
                  SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
                  INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND
                  SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF
                  PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF
                  BUSINESS OPPORTUNITY, BUSINESS INTERRUPTION, LOSS OF USE, LOSS
                  OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT
                  (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN
                  IF FORESEEABLE. THESE EXCLUSIONS OR LIMITATIONS WILL APPLY
                  REGARDLESS OF WHETHER OR NOT OURA HAS BEEN WARNED OF THE
                  POSSIBILITY OF SUCH DAMAGES.
                </Typography>
                <Typography>
                  THE FOREGOING DOES NOT AFFECT ANY LIABILITY WHICH CANNOT BE
                  EXCLUDED OR LIMITED UNDER APPLICABLE LAW. TO THE EXTENT
                  LIABILITY CANNOT BE EXCLUDED OR LIMITED AS SET FORTH ABOVE, IN
                  NO EVENT SHALL OURA BE LIABLE FOR ANY CLAIM, WHETHER IN
                  CONTRACT, TORT, OR UNDER ANY OTHER THEORY OF LIABILITY, IN
                  EXCESS OF $100.
                </Typography>

                <Typography Element="h2" variant="h3">
                  Precautions
                </Typography>
                <Typography>
                  THE SERVICES ARE NOT A MEDICAL DEVICE AND YOU EXPRESSLY AGREE
                  THAT THE SERVICES DO NOT INVOLVE THE PROVISION OF MEDICAL
                  ADVICE BY OURA. THE SERVICES ARE NOT INTENDED TO DIAGNOSE,
                  TREAT, CURE, OR PREVENT ANY DISEASE OR MEDICAL CONDITION. THE
                  SERVICES ARE FOR INFORMATIONAL PURPOSES ONLY AND CANNOT
                  REPLACE THE SERVICES OF PHYSICIANS OR MEDICAL PROFESSIONALS.
                </Typography>
                <Typography>
                  THE SERVICES, INCLUDING ALL INFORMATION, TEXT, PHOTOGRAPHS,
                  IMAGES, ILLUSTRATIONS, GRAPHICS, AUDIO, VIDEO, AND AUDIO-VIDEO
                  CLIPS, AND OTHER MATERIALS, WHETHER PROVIDED BY US OR THIRD
                  PARTIES, IS NOT INTENDED TO BE AND SHOULD NOT BE USED IN PLACE
                  OF (a) THE ADVICE OF YOUR PHYSICIAN OR OTHER MEDICAL
                  PROFESSIONALS, (b) A VISIT, CALL, OR CONSULTATION WITH YOUR
                  PHYSICIAN OR OTHER MEDICAL PROFESSIONALS, OR (c) INFORMATION
                  CONTAINED ON OR IN ANY PRODUCT PACKAGING OR LABEL.
                </Typography>
                <Typography>
                  SHOULD YOU HAVE ANY HEALTH-RELATED QUESTIONS, PLEASE CALL OR
                  SEE YOUR PHYSICIAN OR OTHER MEDICAL PROVIDER PROMPTLY. SHOULD
                  YOU HAVE AN EMERGENCY, CALL YOUR PHYSICIAN OR 911 IMMEDIATELY.
                  YOU SHOULD NEVER DISREGARD MEDICAL ADVICE OR DELAY IN SEEKING
                  MEDICAL ADVICE BECAUSE OF ANY INFORMATION PRESENTED ON THE
                  SERVICES, AND YOU SHOULD NOT USE THE SERVICES OR ANY
                  INFORMATION PROVIDED IN THE SERVICES FOR DIAGNOSING OR
                  TREATING A HEALTH PROBLEM. THE TRANSMISSION AND RECEIPT OF
                  SERVICES, IN WHOLE OR IN PART, OR COMMUNICATION VIA THE
                  INTERNET, EMAIL, OR OTHER MEANS DOES NOT CONSTITUTE OR CREATE
                  A DOCTOR-PATIENT, THERAPIST-PATIENT, OR OTHER HEALTHCARE
                  PROFESSIONAL RELATIONSHIP BETWEEN YOU AND OURA.
                </Typography>
                <Typography>
                  You should always consult a physician before making any
                  changes to your sleep or activity based on information
                  provided through the Services, or if you have any questions
                  regarding a medical condition. Oura is not responsible for any
                  health problems that may result from information you learn
                  about through the Services. If you make any change to your
                  sleep or activity based on the Services, you agree that you do
                  so fully at your own risk. It is important to be sensitive to
                  your body's responses. For example, if you feel unexpected,
                  repeating, or long-term pain, or fatigue or discomfort due to
                  having made changes to your sleep or activity, it is
                  recommended that you consult a physician before continuing
                  with such changes. The information in the Services may be
                  misleading if your physiological functions and responses
                  differ significantly from population averages due to medical
                  conditions or rare natural differences.
                </Typography>
                <Typography>
                  Please be cautious that the Product you are wearing does not
                  get caught on fixed structures or heavy objects. If you
                  experience redness or skin irritation on your finger while
                  wearing the Product, remove it immediately. If symptoms
                  persist longer than 2-3 days of not using the Product, please
                  contact a medical professional.
                </Typography>
                <Typography>
                  Our Product should not be placed in the mouth at any time.
                  Oura’s Product is not a toy nor is it intended for use by
                  children. Children should not be left unattended with this
                  Product, as it may pose a choking hazard.
                </Typography>
                <Typography>
                  The Services may provide links to other websites maintained by
                  third parties. You acknowledge and agree that such links are
                  provided for your convenience only and do not reflect any
                  endorsement, affiliation, relationship, or sponsorship by Oura
                  with respect to the provider of such linked site or the
                  quality, reliability, or any other characteristic or feature
                  of such linked site. You further acknowledge and agree that
                  Oura is not responsible in any manner (including without
                  limitation with respect to any loss or injury you may suffer)
                  for any matter associated with the linked site, including
                  without limitation, the content provided on or through any
                  such linked site or your reliance thereon. In addition, you
                  should be aware that your use of any third party site is
                  subject to the terms and conditions applicable to that site,
                  including the privacy policies (or lack thereof) of such site.
                  If a third party links to the Services, it is not necessarily
                  an indication of endorsement, affiliation, relationship, or
                  sponsorship by or with Oura. Oura may not even be aware that a
                  third party has linked to the Services.
                </Typography>
                <Typography>
                  Any other content not owned by Oura is owned by its respective
                  owner. You acknowledge and agree that such content is provided
                  by its owner and does not reflect any endorsement,
                  affiliation, relationship, or sponsorship by Oura with respect
                  to the provider of such content. You further acknowledge and
                  agree that Oura is not liable or responsible in any manner
                  (including without limitation with respect to any loss or
                  injury you may suffer) for any content provided by third
                  parties including, without limitation, your reliance thereon.
                  OURA MAKES NO REPRESENTATIONS OR WARRANTIES WITH RESPECT TO
                  ANY THIRD PARTY CONTENT.
                </Typography>
                <Typography>
                  You agree to indemnify, hold harmless, and defend Oura, its
                  subsidiaries, affiliates, officers, directors, employees,
                  representatives, agents, partners, licensors, successors, and
                  assigns, from and against any action, cause, claim, damage,
                  debt, demand, or liability, including reasonable costs and
                  attorneys’ fees, asserted by any person, arising out of or
                  relating to (i) your use of the Services, including but not
                  limited to anyone using your account or Credentials; (ii)
                  breach of this Agreement by you or anyone using your account
                  or Credentials; (iii) any information used, stored, or
                  transmitted in connection with your account or Credentials;
                  (iv) breach of the rights of any third party, including but
                  not limited to privacy, publicity, intellectual property, or
                  other proprietary rights by you or anyone using your account
                  or Credentials; or (v) violation of any law, regulation, or
                  other legal requirement.
                </Typography>
                <Typography Element="h2" variant="h3">
                  Notice for California Users
                </Typography>
                <Typography>
                  Under California Civil Code Section 1789.3, California users
                  of the Services are entitled to the following specific
                  consumer rights notice:
                </Typography>
                <Typography className="ml-8">
                  The Complaint Assistance Unit of the Division of Consumer
                  Services of the California Department of Consumer Affairs may
                  be contacted in writing at 1625 N. Market Blvd., Suite N 112,
                  Sacramento, California 95834, or by telephone at (800)
                  952-5210.
                </Typography>
                <Typography Element="h2" variant="h3">
                  Termination; Cancellation
                </Typography>
                <Typography>
                  This Agreement shall continue in full force until terminated
                  or cancelled pursuant to this Agreement.
                </Typography>
                <Typography>
                  Oura shall have the right to terminate this Agreement (i) for
                  any reason whatsoever by providing thirty (30) days’ notice to
                  you; (ii) immediately for your material breach of this
                  Agreement, other than non-payment of Fees; or (iii) for
                  non-payment of Fees. Notwithstanding the foregoing, Oura
                  reserves the right, in its sole discretion and without notice,
                  at any time and for any reason, to remove, modify, suspend, or
                  disable access to all or any portion of the Services.
                </Typography>
                <Typography>
                  You may terminate the Agreement for any reason whatsoever by
                  providing thirty (30) days’ notice to Oura by visiting{' '}
                  <BodyLink
                    href="https://support.ouraring.com/hc/en-us"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    support.ouraring.com
                  </BodyLink>{' '}
                  and submitting a ticket. You shall be responsible for all Fees
                  incurred prior to and during the notice period.
                </Typography>
                <Typography>
                  Sections titled Precautions, Intellectual Property Rights,
                  Data and Communications, Indemnification, Warranty Disclaimer,
                  Limitation of Liability, Governing Law, Forum; Mandatory
                  Binding Arbitration; Class Action Waiver, and payment
                  obligations for Fees incurred prior to and during any notice
                  period shall survive termination of this Agreement for any
                  reason whatsoever.
                </Typography>
                <Typography Element="h2" variant="h3">
                  Federal Government End Use Restrictions
                </Typography>
                <Typography>
                  If you are a U.S. federal government department or agency or
                  are contracting on behalf of such department or agency,
                  Services are “Commercial Items” as that term is defined at 48
                  C.F.R. §2.101, consisting of “Commercial Computer Software”
                  and “Commercial Computer Software Documentation,” as those
                  terms are used in 48 C.F.R. §12.212 or 48 C.F.R. §227.7202.
                  Consistent with 48 C.F.R. §12.212 or 48 C.F.R. §227.7202-1
                  through 227.7202-4, as applicable, the Service is licensed to
                  you with only those rights as provided under the terms and
                  conditions of this Agreement.
                </Typography>
                <Typography Element="h2" variant="h3">
                  Export Compliance and Use Restrictions
                </Typography>
                <Typography>
                  You will not directly or indirectly export or re-export the
                  Services, or any technical information related thereto, to any
                  destination or person prohibited or restricted by applicable
                  law, including, without limitation, all applicable U.S. export
                  control laws and regulations.
                </Typography>
                <Typography Element="h2" variant="h3">
                  Governing Law; Forum; Mandatory Binding Arbitration, Class
                  Action Waiver
                </Typography>
                <Typography>
                  Any action related to this Agreement, the Services, and your
                  relationship with Oura shall be governed by, construed, and
                  interpreted in accordance with the laws of the State of
                  California without regard to its conflict of laws principles
                  AND WILL SPECIFICALLY NOT BE GOVERNED BY THE UNITED NATIONS
                  CONVENTIONS ON CONTRACTS FOR THE INTERNATIONAL SALE OF GOODS,
                  IF OTHERWISE APPLICABLE. You agree to resolve any disputes or
                  claims arising out of or related to this Agreement or the
                  Services through final and binding arbitration by a single
                  arbitrator. This includes disputes arising out of or relating
                  to interpretation or application of this “Mandatory
                  Arbitration Provision” section, including its enforceability,
                  revocability, or validity. Notwithstanding the foregoing,
                  either party may bring a lawsuit solely for injunctive relief
                  to stop unauthorized use or abuse of the Services, or
                  violation of any intellectual property. Subject to the
                  Mandatory Arbitration Provision, the parties irrevocably
                  consent to bring any action to resolve or enforce claims
                  arising under or relating to this Agreement in the federal or
                  state courts in San Francisco, California, and each party
                  irrevocably submits to the exclusive jurisdiction of such
                  courts in any such suit, action, or proceeding. Except to the
                  extent prohibited by applicable law, the parties agree that
                  any claim or cause of action arising out of or related to use
                  of the Services or this Agreement must be filed within one (1)
                  year after such claim or cause of action arose or be forever
                  barred. This paragraph does not apply to users who reside in
                  the European Union. If you are a user based in the European
                  Union, then Finnish law shall apply to this Agreement and the
                  Finnish courts shall have exclusive jurisdiction to hear
                  disputes arising in relation to this Agreement. This provision
                  shall not apply to consumers in countries that require
                  agreements to be governed by the local laws of the consumer's
                  country. The English language shall govern all documents,
                  notices, and interpretations of these Agreement. You also
                  agree to waive any right to assert any claims against Oura as
                  a representative or member in any class or representative
                  action, except where such waiver is prohibited by law or
                  deemed by a court of law to be against public policy.
                </Typography>
                <Typography Element="h2" variant="h3">
                  Miscellaneous
                </Typography>
                <Typography>
                  You acknowledge that Oura has the right to monitor use of the
                  Services to ensure compliance with the Agreement.
                </Typography>
                <Typography>
                  No waiver of any term, provision, or condition of this
                  Agreement, whether by conduct or otherwise, in any one or more
                  instances, shall be deemed to be, or shall constitute, a
                  waiver of any other term, provision, or condition hereof,
                  whether or not similar, nor shall such waiver constitute a
                  continuing waiver of any such term, provision, or condition
                  hereof. No waiver shall be binding unless executed in writing
                  by the party making the waiver.
                </Typography>
                <Typography>
                  You may not assign this Agreement to any other party and any
                  attempt to do so is void.
                </Typography>
                <Typography>
                  If any provision of this Agreement is determined to be illegal
                  or unenforceable, then such provision will be enforced to the
                  maximum extent possible, and the other provisions will remain
                  fully effective and enforceable.
                </Typography>
                <Typography>
                  This Agreement and the Privacy Policy constitute the complete
                  and exclusive statement of the agreement between you and Oura
                  regarding the Services, and supersedes any and all prior or
                  contemporaneous communications, representations, statements,
                  and understandings, whether oral or written, between the
                  parties.
                </Typography>
                <Typography>
                  In case of any conflict between the terms of this Agreement
                  and the terms of the Privacy Policy, the terms of this
                  Agreement shall prevail.
                </Typography>
                <Typography Element="h2" variant="h3">
                  Modification of the Terms and Services
                </Typography>
                <Typography>
                  Oura reserves the right to update this Agreement and/or the
                  Privacy Policy at any time and for any reason in its sole
                  discretion by posting updated terms. Unless otherwise
                  indicated by Oura, any changes will become effective on a
                  prospective basis from the date of posting. Oura will notify
                  you of any material changes to the Agreement or Services. By
                  continuing to access or use the Services after we have
                  provided you with notice of a modification, you are agreeing
                  to be bound by the modified Agreement. If the modified
                  Agreement is not acceptable to you, your only recourse is to
                  cease using the Services. Oura and its third-party service
                  providers may make improvements and/or changes in the
                  Services, features, and prices described at any time and for
                  any reason in its sole discretion. The Mobile App may download
                  and install upgrades, updates, and additional features in
                  order to improve, enhance, and further develop the Services.
                  Oura reserves the right at any time to modify or discontinue,
                  temporarily or permanently, the Services or any portion
                  thereof with or without notice. You agree that Oura shall not
                  be liable to you or to any third party for any modification,
                  suspension, or discontinuance of the Services.
                </Typography>
                <Typography Element="h1" variant="super">
                  ŌURA TERMS OF DELIVERY
                </Typography>
                <Typography>
                  <em>Last Updated: October 18, 2021</em>
                </Typography>
                <Typography Element="h2" variant="h3">
                  The European Union and USA
                </Typography>
                <Typography>DDP – Delivered Duty Paid</Typography>
                <Typography>
                  Oura is responsible for delivering the goods to the named
                  place in the country of the buyer, and pays all costs in
                  delivering the goods to the destination, including import
                  duties and taxes.
                </Typography>
                <Typography Element="h2" variant="h3">
                  Outside the European Union and USA
                </Typography>
                <Typography>DAP – Delivered at Place</Typography>
                <Typography>
                  Oura pays for carriage to the named place, except for costs
                  related to import clearance, and assumes all risks prior to
                  the point that the goods are ready for unloading by the buyer.
                </Typography>
              </>
            </TypographyRhythm>
          </Box>
        </PageContainer>
        <Footer />
      </div>
    </div>
  );
};

Page.pageName = 'Terms and Conditions';
Page.isSormusCompatible = true;

export default Page;
