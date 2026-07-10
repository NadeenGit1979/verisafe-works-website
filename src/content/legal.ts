import { siteConfig } from '@/config/site'
import type { LegalDocument } from '@/types/content'

const { legal } = siteConfig

/**
 * Privacy policy, kept in sync with verisafe_works_privacy_policy.docx in the
 * repo root — that document is the master copy; edit it first, then mirror
 * changes here.
 */
export const privacy: LegalDocument = {
  title: 'Privacy Policy',
  lede: `How ${siteConfig.name} collects, uses, stores and protects your personal data, and the rights you have over it.`,
  effectiveDate: '10 July 2026',
  lastUpdated: '10 July 2026',
  version: '1.0',
  sections: [
    {
      id: 'introduction',
      title: '1. Introduction',
      blocks: [
        {
          kind: 'paragraph',
          text: `${siteConfig.name} ("we", "us", "our") is the trading name of ${legal.companyName}, a company registered in England and Wales, committed to protecting the privacy and personal data of all individuals who use our mobile application ("the App"), including tradespeople ("Workers") and homeowners/residents ("Customers").`,
        },
        {
          kind: 'paragraph',
          text: `This Privacy Policy explains how we collect, use, store, share and protect your personal data when you use the ${siteConfig.name} application, available on the Google Play Store and Apple App Store. It also explains your rights under the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and, where applicable, the EU GDPR.`,
        },
        {
          kind: 'note',
          text: 'This App records audio, video, photographs and transcripts inside private residential properties. By using this App, you explicitly consent to the processing described in this Policy. If you do not agree with this Policy, you must not use the App.',
        },
        { kind: 'subheading', text: 'Data Controller' },
        {
          kind: 'table',
          rows: [
            ['Company', `${legal.companyName} (trading as "${siteConfig.name}")`],
            ['Registered Address', legal.registeredAddress],
            ['Company Registration Number', legal.companyNumber],
            ['ICO Registration Number', legal.icoNumber],
            ['Email', legal.email],
          ],
        },
      ],
    },
    {
      id: 'who-this-policy-applies-to',
      title: '2. Who This Policy Applies To',
      blocks: [
        { kind: 'paragraph', text: 'This Policy applies to:' },
        {
          kind: 'list',
          items: [
            `Any individual or organization using the ${siteConfig.name} App.`,
            'Any individual or organization visiting the verisafe.works website.',
          ],
        },
      ],
    },
    {
      id: 'what-personal-data-we-collect',
      title: '3. What Personal Data We Collect',
      blocks: [
        { kind: 'subheading', text: '3.1 Account Registration Data (Workers)' },
        {
          kind: 'list',
          items: [
            'Full name',
            'Email address',
            'Mobile telephone number',
            'Trade type and business name',
            'Profile photograph',
            'Device identifiers',
          ],
        },
        { kind: 'subheading', text: '3.2 In-Session Recording Data' },
        {
          kind: 'paragraph',
          text: 'The following data may be collected during active job sessions with explicit consent from all parties:',
        },
        {
          kind: 'list',
          items: [
            'Audio recordings of conversations between Worker and Customer',
            'Video recordings of job site conditions before, during and after work',
            'Photographs of work areas, materials and job completion',
            'Transcripts generated from audio recordings via AI transcription',
            'Timestamps of all recorded interactions',
            'GPS location data confirming the job address',
          ],
        },
        { kind: 'subheading', text: '3.3 Job and Transaction Data' },
        {
          kind: 'list',
          items: [
            'Job descriptions and scope of work',
            'Any agreed changes to job scope (additional labour/parts approvals)',
            'Job completion confirmations (digital sign-off)',
            'Customer-provided contact details (email for transcript delivery)',
          ],
        },
        { kind: 'subheading', text: '3.4 Device and Technical Data' },
        {
          kind: 'list',
          items: [
            'Device type, operating system and version',
            'App version',
            'Unique device identifiers',
            'IP address',
            'Push notification tokens (Firebase Cloud Messaging)',
            'Crash logs and diagnostic data',
          ],
        },
        { kind: 'subheading', text: '3.5 Communications Data' },
        {
          kind: 'list',
          items: ['In-app messages or support requests', 'Email correspondence with our team'],
        },
      ],
    },
    {
      id: 'legal-basis-for-processing',
      title: '4. Legal Basis for Processing',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Under UK GDPR Article 6, we rely on the following lawful bases:',
        },
        {
          kind: 'table',
          headers: ['Data Type', 'Lawful Basis'],
          rows: [
            ['Account registration', 'Contract — necessary to provide the service'],
            [
              'Audio/video/photo recordings',
              'Explicit Consent (Article 9 / Article 6(1)(a)) — obtained from all parties before recording commences',
            ],
            [
              'Job completion records',
              'Legitimate Interests — protecting both parties from disputes',
            ],
            ['Transcript delivery to Customer', 'Contract — core service delivery'],
            [
              'Crash logs and diagnostics',
              'Legitimate Interests — improving app stability and security',
            ],
            ['Legal compliance', 'Legal Obligation — where required by law'],
          ],
        },
        { kind: 'subheading', text: '4.1 Special Category Data' },
        {
          kind: 'paragraph',
          text: 'Audio and video recordings made inside private homes may inadvertently capture special category data as defined under UK GDPR Article 9 (e.g. health information, religious symbols, family composition). We process this data only on the basis of explicit consent and take enhanced security measures to protect it.',
        },
      ],
    },
    {
      id: 'how-we-collect-consent',
      title: '5. How We Collect Consent',
      blocks: [
        {
          kind: 'paragraph',
          text: `Consent is fundamental to ${siteConfig.name}. Before any recording commences, the App requires:`,
        },
        {
          kind: 'list',
          items: [
            'Worker confirmation that the Customer has been informed the App will be used',
            'Verbal acknowledgement by the Customer (recorded as part of the session)',
            'In-App confirmation of Customer consent',
            'A copy of this Privacy Policy is available within the App at all times',
          ],
        },
        {
          kind: 'paragraph',
          text: 'Customers may withdraw consent at any time by asking the Worker to stop the recording. However, data already collected prior to withdrawal may be retained where we have a legitimate interest in doing so (e.g. to resolve an existing dispute).',
        },
      ],
    },
    {
      id: 'how-we-use-your-data',
      title: '6. How We Use Your Data',
      blocks: [
        { kind: 'paragraph', text: 'We use your personal data for the following purposes:' },
        {
          kind: 'list',
          items: [
            'Providing the core service: recording, storing and delivering job session records',
            `Dispute resolution: providing audio, video and transcript evidence if a dispute arises between a Worker and Customer. ${legal.companyName} will not be involved in any dispute resolution beyond providing the job history to the relevant parties involved in the dispute.`,
            'Transcript generation: converting audio recordings to text and delivering transcripts to Customers by email',
            'Account management: managing Worker accounts, subscriptions and access',
            'App improvement: analysing crash reports and usage patterns to improve stability',
            'Legal compliance: responding to lawful requests from courts, regulators or law enforcement',
            'Fraud prevention: detecting and preventing misuse of the platform',
          ],
        },
        { kind: 'paragraph', text: 'We do not use your recordings for:' },
        {
          kind: 'list',
          items: [
            'Marketing or advertising purposes',
            'Training AI models without separate, explicit consent',
            'Sale to third parties',
          ],
        },
      ],
    },
    {
      id: 'data-retention',
      title: '7. Data Retention',
      blocks: [
        {
          kind: 'table',
          headers: ['Data Type', 'Retention Period', 'Reason'],
          rows: [
            ['Audio/video recordings', '90 days from session date', 'Dispute window coverage'],
            ['Transcripts', '90 days from session date', 'Dispute window coverage'],
            ['Photographs', '90 days from session date', 'Dispute window coverage'],
            [
              'Account data',
              'Duration of account + 30 days after a deletion request',
              'Deletion processing and recovery window',
            ],
            ['Job records (metadata)', '2 years', 'Legal claims limitation period'],
            ['Crash logs', '30 days', 'Technical improvement'],
            ['Financial records', '7 years', 'HMRC legal requirement'],
          ],
        },
        {
          kind: 'paragraph',
          text: 'After the applicable retention period, data is permanently and securely deleted from all systems, including backups. Workers and Customers may request earlier deletion subject to Section 11 (Your Rights). Where you request deletion of your account, personal data is permanently deleted within 30 days of the request, except where a longer statutory retention period applies (e.g. financial records).',
        },
      ],
    },
    {
      id: 'who-we-share-your-data-with',
      title: '8. Who We Share Your Data With',
      blocks: [
        {
          kind: 'paragraph',
          text: 'We share personal data only where necessary and under strict data processing agreements:',
        },
        { kind: 'subheading', text: '8.1 Third-Party Service Providers (Data Processors)' },
        {
          kind: 'table',
          headers: ['Provider', 'Purpose', 'Data Shared', 'Location'],
          rows: [
            [
              'Amazon Web Services (AWS)',
              'Secure cloud storage of recordings',
              'Audio, video, photos, transcripts',
              'UK/EU regions (London/Ireland)',
            ],
            [
              'OpenAI',
              'AI transcription of audio recordings',
              'Audio recordings only',
              'USA (Standard Contractual Clauses in place)',
            ],
            [
              'Firebase (Google)',
              'Push notifications, app analytics',
              'Device tokens, usage data',
              'USA (Standard Contractual Clauses in place)',
            ],
            ['Redis / BullMQ', 'Job queue processing', 'Job metadata only', 'UK/EU regions'],
            [
              'PostgreSQL (hosted via Amazon Web Services)',
              'Core database',
              'Account and job data',
              'UK region (AWS London)',
            ],
            [
              'Vercel',
              'Website hosting and anonymised site analytics',
              'Anonymised page-view data (website visitors only)',
              'USA/EU (Standard Contractual Clauses in place)',
            ],
          ],
        },
        {
          kind: 'paragraph',
          text: 'All third-party processors are bound by Data Processing Agreements (DPAs) and are only permitted to process data on our documented instructions.',
        },
        { kind: 'subheading', text: '8.2 International Transfers' },
        {
          kind: 'paragraph',
          text: 'Where data is transferred outside the UK or EU (e.g. to OpenAI or Firebase in the USA), we ensure appropriate safeguards are in place, including:',
        },
        {
          kind: 'list',
          items: [
            'Standard Contractual Clauses (SCCs) approved by the ICO',
            'Adequacy decisions where applicable',
            'Transfer Impact Assessments where required',
          ],
        },
        { kind: 'subheading', text: '8.3 Legal and Regulatory Disclosure' },
        { kind: 'paragraph', text: 'We may disclose personal data to:' },
        {
          kind: 'list',
          items: [
            'Law enforcement or regulatory authorities where required by law',
            'Courts in connection with legal proceedings',
            "The Information Commissioner's Office (ICO) in the event of a data breach or regulatory inquiry",
          ],
        },
        {
          kind: 'paragraph',
          text: 'We will always notify you of such disclosures unless prohibited by law.',
        },
        { kind: 'subheading', text: '8.4 What We Never Do' },
        {
          kind: 'list',
          items: [
            'We never sell your personal data to third parties',
            'We never share job records with advertisers or marketing companies',
            'We never use recordings to train AI models without separate explicit consent',
          ],
        },
      ],
    },
    {
      id: 'data-security',
      title: '9. Data Security',
      blocks: [
        {
          kind: 'paragraph',
          text: 'We implement technical and organisational security measures appropriate to the sensitivity of the data we hold, including:',
        },
        { kind: 'subheading', text: 'Technical Measures' },
        {
          kind: 'list',
          items: [
            'Encryption of all recordings in transit, using TLS 1.3',
            'Encryption at rest for all stored recordings, using AES-256',
            'Role-based access controls — only authorised personnel can access recordings, and only for the purposes described in this Policy (e.g. transcription, dispute resolution, technical support)',
            'Multi-factor authentication for all administrative access',
            'Automated security scanning via CI/CD pipeline',
            'Regular penetration testing',
          ],
        },
        { kind: 'subheading', text: 'Organisational Measures' },
        {
          kind: 'list',
          items: [
            'All staff and contractors bound by confidentiality agreements and NDAs',
            'Data minimisation — we only collect what is necessary',
            'Privacy by Design principles embedded in our development process',
            'Regular staff training on data protection',
            'A documented Data Breach Response Plan',
          ],
        },
        {
          kind: 'paragraph',
          text: 'In the event of a personal data breach that is likely to result in risk to your rights and freedoms, we will notify the ICO within 72 hours and affected individuals without undue delay, as required by UK GDPR Article 33.',
        },
        {
          kind: 'note',
          text: `Note on storage: recordings are encrypted at rest and in transit, and access is tightly restricted — but ${siteConfig.name}, as the data controller, retains the technical ability to access stored recordings where necessary for the purposes set out in this Policy (such as fulfilling a data subject access request or investigating a dispute). This is standard server-side encryption rather than end-to-end encryption, where no party but the original participants could ever access the content.`,
        },
      ],
    },
    {
      id: 'cookies-and-tracking',
      title: '10. Cookies and Tracking',
      blocks: [
        {
          kind: 'paragraph',
          text: `The ${siteConfig.name} mobile application does not use traditional browser cookies. However, we do use:`,
        },
        {
          kind: 'list',
          items: [
            'Firebase Analytics — anonymised usage data to improve the app',
            'Crash reporting tools — to identify and fix technical issues',
            'Device identifiers — to maintain your session and account',
          ],
        },
        {
          kind: 'paragraph',
          text: 'You can opt out of analytics tracking in your device settings (iOS: Settings > Privacy > Analytics; Android: Settings > Google > Ads).',
        },
        {
          kind: 'paragraph',
          text: 'Our website (verisafe.works) is hosted by Vercel and uses Vercel Analytics, a cookieless service that collects anonymised page-view statistics. The website does not use advertising or cross-site tracking cookies. If you choose a light or dark theme on the website, that preference is stored locally in your browser and never leaves your device.',
        },
      ],
    },
    {
      id: 'your-rights-under-uk-gdpr',
      title: '11. Your Rights Under UK GDPR',
      blocks: [
        {
          kind: 'paragraph',
          text: 'You have the following rights regarding your personal data:',
        },
        {
          kind: 'table',
          headers: ['Right', 'What It Means'],
          rows: [
            ['Right of Access', 'Request a copy of all data we hold about you'],
            ['Right to Rectification', 'Correct inaccurate or incomplete data'],
            ['Right to Erasure', 'Request deletion of your data ("right to be forgotten")'],
            ['Right to Restriction', 'Limit how we process your data in certain circumstances'],
            ['Right to Portability', 'Receive your data in a structured, machine-readable format'],
            ['Right to Object', 'Object to processing based on legitimate interests'],
            [
              'Right to withdraw consent',
              'Withdraw consent at any time without affecting prior processing',
            ],
            [
              'Rights re automated decisions',
              'Not to be subject to solely automated decisions with significant effects',
            ],
          ],
        },
        {
          kind: 'paragraph',
          text: `To exercise any of these rights, contact us at: ${legal.email}. We will respond within one calendar month. We will not charge a fee unless your request is manifestly unfounded or excessive.`,
        },
        {
          kind: 'paragraph',
          text: 'Note regarding in-session recordings: where erasure of a record is requested prior to the legally defined date of necessary erasure, we will comply subject to agreement from the other party/parties attached to that record.',
        },
      ],
    },
    {
      id: 'childrens-data',
      title: "12. Children's Data",
      blocks: [
        {
          kind: 'paragraph',
          text: `${siteConfig.name} is not intended for use by individuals under the age of 18. We do not knowingly collect personal data from children. If you believe a child's data has been captured through use of the App, please contact us immediately at ${legal.email} and we will take prompt action to delete it.`,
        },
      ],
    },
    {
      id: 'automated-decision-making',
      title: '13. Automated Decision Making',
      blocks: [
        {
          kind: 'paragraph',
          text: 'We use AI transcription (via OpenAI) to generate text transcripts from audio recordings. This is a purely automated process. However, no automated decision-making with legal or similarly significant effects is made about any individual based solely on this processing. Transcripts are provided as a record — not as a basis for any automated decision.',
        },
      ],
    },
    {
      id: 'changes-to-this-policy',
      title: '14. Changes to This Policy',
      blocks: [
        {
          kind: 'paragraph',
          text: 'We may update this Privacy Policy from time to time. Where changes are material, we will:',
        },
        {
          kind: 'list',
          items: [
            'Notify Workers via in-app notification and email',
            'Update the "Last Updated" date at the top of this Policy',
            'Where required, seek fresh consent',
          ],
        },
        {
          kind: 'paragraph',
          text: 'Continued use of the App after notification of changes constitutes acceptance of the updated Policy.',
        },
      ],
    },
    {
      id: 'how-to-complain',
      title: '15. How to Complain',
      blocks: [
        {
          kind: 'paragraph',
          text: "If you are unhappy with how we handle your personal data, you have the right to lodge a complaint with the Information Commissioner's Office (ICO):",
        },
        {
          kind: 'list',
          items: [
            "Information Commissioner's Office",
            'Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF',
            'Tel: 0303 123 1113',
            'Website: ico.org.uk',
          ],
        },
        {
          kind: 'paragraph',
          text: `We would, however, appreciate the opportunity to address your concerns before you approach the ICO. Please contact us first at ${legal.email}.`,
        },
      ],
    },
    {
      id: 'contact-us',
      title: '16. Contact Us',
      blocks: [
        {
          kind: 'paragraph',
          text: 'For any questions about this Privacy Policy or how we handle your data:',
        },
        {
          kind: 'list',
          items: [
            `${legal.companyName} (trading as "${siteConfig.name}")`,
            `Email: ${legal.email}`,
            `Post: ${legal.registeredAddress}`,
            `ICO Registration Number: ${legal.icoNumber}`,
          ],
        },
        {
          kind: 'paragraph',
          text: "This Privacy Policy was drafted in accordance with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and the ICO's guidance on privacy notices.",
        },
      ],
    },
  ],
}

/**
 * Terms of service, kept in sync with
 * Terms-Privacy-Legals/VeriSafe_Works_Terms_of_Service.docx — that document is
 * the master copy; edit it first, then mirror changes here.
 */
export const terms: LegalDocument = {
  title: 'Terms & Conditions',
  lede: `The terms governing your access to and use of the ${siteConfig.name} app and platform.`,
  effectiveDate: '10 July 2026',
  lastUpdated: '10 July 2026',
  version: '1.0',
  sections: [
    {
      id: 'introduction-and-acceptance',
      title: '1. Introduction and Acceptance',
      blocks: [
        {
          kind: 'paragraph',
          text: `These Terms of Service ("Terms") govern your access to and use of the ${siteConfig.name} mobile application ("the App"), operated by ${legal.companyName} ("we", "us", "our"), trading as "${siteConfig.name}", a company registered in England and Wales.`,
        },
        {
          kind: 'paragraph',
          text: 'By downloading, installing or using the App, you agree to be bound by these Terms. If you do not agree, you must not use the App.',
        },
        {
          kind: 'paragraph',
          text: 'These Terms should be read alongside our Privacy Policy (including its data retention provisions) and In-Session Consent Notice, both of which form part of our agreement with you.',
        },
        { kind: 'subheading', text: 'Data Controller' },
        {
          kind: 'table',
          rows: [
            ['Company', `${legal.companyName} (trading as "${siteConfig.name}")`],
            ['Registered Address', legal.registeredAddress],
            ['Company Registration Number', legal.companyNumber],
            ['ICO Registration Number', legal.icoNumber],
            ['Email', legal.email],
          ],
        },
      ],
    },
    {
      id: 'definitions',
      title: '2. Definitions',
      blocks: [
        {
          kind: 'list',
          items: [
            `"App" means the ${siteConfig.name} mobile application available on the Google Play Store and Apple App Store`,
            '"Worker" means a tradesperson or contractor who uses the App to record job sessions',
            '"Customer" means a homeowner or resident in whose property the App is used',
            '"Session" means a recorded interaction between a Worker and Customer via the App',
            '"Recording" means any audio, video, photograph or transcript captured during a Session',
            '"Platform" means the App, backend systems, API and associated services collectively',
          ],
        },
      ],
    },
    {
      id: 'eligibility',
      title: '3. Eligibility',
      blocks: [
        {
          kind: 'paragraph',
          text: `You must be at least 18 years of age to use ${siteConfig.name}. By creating an account, you confirm that:`,
        },
        {
          kind: 'list',
          items: [
            'You are at least 18 years old',
            'You have the legal capacity to enter into a binding contract',
            'You are either a registered tradesperson (Worker) or a homeowner/resident (Customer)',
            'All information you provide is accurate and truthful',
          ],
        },
      ],
    },
    {
      id: 'account-registration',
      title: '4. Account Registration (Workers)',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Workers must register an account to use the App. You agree to:',
        },
        {
          kind: 'list',
          items: [
            'Provide accurate, current and complete registration information',
            'Keep your account credentials secure and confidential',
            'Notify us immediately of any unauthorised access to your account',
            'Not share your account with any other person',
            'Not impersonate any other person or trade under a false identity',
          ],
        },
        {
          kind: 'paragraph',
          text: 'We reserve the right to suspend or terminate accounts that breach these requirements.',
        },
      ],
    },
    {
      id: 'the-service',
      title: `5. The ${siteConfig.name} Service`,
      blocks: [
        { kind: 'subheading', text: '5.1 What the App Does' },
        {
          kind: 'paragraph',
          text: `${siteConfig.name} provides a structured recording and verification platform that:`,
        },
        {
          kind: 'list',
          items: [
            'Records arrival confirmation and job commencement',
            'Captures Customer acknowledgement that the Worker has advised use of the App',
            'Records any changes to job scope, including Customer approval of additional labour and parts',
            'Documents job completion confirmation',
            'Delivers a copy of the audio recording and transcript to the Customer upon job completion',
          ],
        },
        { kind: 'subheading', text: '5.2 What the App Does Not Do' },
        {
          kind: 'list',
          items: [
            `${siteConfig.name} is not a legal service and does not provide legal advice`,
            'Recordings are provided as factual records — we make no warranty as to their admissibility in any legal proceeding',
            'We are not a dispute resolution service — we provide evidence, not decisions',
            'We do not verify the identity, qualifications or licensing of Workers',
          ],
        },
      ],
    },
    {
      id: 'consent-requirements',
      title: '6. Consent Requirements — Critical Obligations',
      blocks: [
        { kind: 'subheading', text: '6.1 Worker Obligations' },
        {
          kind: 'paragraph',
          text: 'Before commencing any recording, the Worker must:',
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            `Inform the Customer that ${siteConfig.name} will be used during the visit`,
            'Explain that the purpose is mutual protection and transparency',
            "Obtain the Customer's verbal consent to be recorded (this verbal consent will itself be recorded as the opening of the Session)",
            'Confirm Customer consent via the in-App confirmation screen',
            'Ensure all persons present in the property are made aware a recording is taking place',
          ],
        },
        {
          kind: 'note',
          text: `Failure to obtain proper consent before recording is a serious breach of these Terms. Depending on the circumstances, it may also expose the Worker to legal and regulatory consequences under UK data protection law (including the UK GDPR and the Data Protection Act 2018) and other applicable privacy legislation. We recommend the Worker treats consent as mandatory in every case — ${siteConfig.name} does not provide legal advice on the consequences of non-compliance in any specific situation.`,
        },
        { kind: 'subheading', text: '6.2 Customer Rights During a Session' },
        { kind: 'paragraph', text: 'Customers may at any time:' },
        {
          kind: 'list',
          items: [
            'Ask the Worker to pause or stop the recording',
            'Withdraw their consent to ongoing recording',
            'Request that the session recording be deleted (subject to any active dispute)',
          ],
        },
        { kind: 'subheading', text: '6.3 Recordings in Shared or Rented Properties' },
        {
          kind: 'paragraph',
          text: 'Where the Customer is a tenant rather than the property owner, the Worker must ensure the tenant has authority to consent to recording within that property.',
        },
      ],
    },
    {
      id: 'acceptable-use',
      title: '7. Acceptable Use',
      blocks: [
        { kind: 'paragraph', text: 'You agree not to use the App to:' },
        {
          kind: 'list',
          items: [
            'Record any person without their explicit prior consent',
            'Capture recordings for any purpose other than the legitimate job verification purposes described in these Terms',
            'Harass, threaten, intimidate or coerce any person',
            'Record in any location where recording is prohibited by law',
            'Share recordings with any third party other than as permitted by these Terms',
            'Use the App for any unlawful, fraudulent or malicious purpose',
            "Attempt to access, modify or interfere with the App's backend systems or API",
            'Upload or transmit any malware, viruses or harmful code',
            'Circumvent any technical or security measures within the App',
          ],
        },
      ],
    },
    {
      id: 'intellectual-property',
      title: '8. Intellectual Property',
      blocks: [
        { kind: 'subheading', text: '8.1 Our IP' },
        {
          kind: 'paragraph',
          text: `All intellectual property in the App, including but not limited to the software, design, branding, trademarks, logos and content, is owned by or licensed to ${legal.companyName}. You may not copy, modify, distribute, sell or reverse engineer any part of the App.`,
        },
        { kind: 'subheading', text: '8.2 Your Recordings' },
        {
          kind: 'paragraph',
          text: 'You retain ownership of the specific content captured in your recordings (e.g. the conversation itself). By using the App, you grant us a limited, non-exclusive licence to store, process and transmit your recordings solely for the purpose of providing the Service.',
        },
        {
          kind: 'paragraph',
          text: 'We do not claim ownership of your recordings and will not use them for any purpose beyond service delivery and legal compliance.',
        },
      ],
    },
    {
      id: 'subscription-and-payments',
      title: '9. Subscription and Payments',
      blocks: [
        { kind: 'subheading', text: '9.1 Free Tier' },
        {
          kind: 'paragraph',
          text: `${siteConfig.name} may offer a free tier with limited functionality as described in the App at the time of use.`,
        },
        { kind: 'subheading', text: '9.2 Paid Subscriptions' },
        {
          kind: 'paragraph',
          text: 'Premium features are available via subscription plans as listed in the App. Subscriptions are:',
        },
        {
          kind: 'list',
          items: [
            'Billed in advance on a monthly or annual basis',
            'Automatically renewed unless cancelled before the renewal date',
            'Non-refundable except where required by law',
          ],
        },
        { kind: 'subheading', text: '9.3 Cancellation' },
        {
          kind: 'paragraph',
          text: 'You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing period. You will retain access to premium features until that date.',
        },
        { kind: 'subheading', text: '9.4 Price Changes' },
        {
          kind: 'paragraph',
          text: "We will give at least 30 days' notice of any price changes before they take effect.",
        },
      ],
    },
    {
      id: 'limitation-of-liability',
      title: '10. Limitation of Liability',
      blocks: [
        { kind: 'paragraph', text: 'To the fullest extent permitted by law:' },
        {
          kind: 'list',
          items: [
            'We provide the App on an "as is" basis and make no warranties as to its fitness for any particular purpose',
            'We are not liable for any loss of data, business interruption, or indirect or consequential loss arising from your use of the App',
            'Our total liability to you in respect of any claim shall not exceed the total fees paid by you in the 12 months preceding the claim',
            'We are not liable for the conduct of any Worker or Customer using the App',
          ],
        },
        {
          kind: 'paragraph',
          text: 'Nothing in these Terms limits our liability for death or personal injury caused by our negligence, fraud, or any other liability that cannot be excluded by law.',
        },
      ],
    },
    {
      id: 'indemnification',
      title: '11. Indemnification',
      blocks: [
        {
          kind: 'paragraph',
          text: `You agree to indemnify and hold harmless ${legal.companyName}, its officers, directors, employees and contractors from any claims, damages, costs or expenses (including legal fees) arising from:`,
        },
        {
          kind: 'list',
          items: [
            'Your breach of these Terms',
            'Your failure to obtain proper consent before recording',
            'Your misuse of recordings obtained through the App',
            'Any third-party claim arising from your use of the App',
          ],
        },
      ],
    },
    {
      id: 'termination',
      title: '12. Termination',
      blocks: [
        {
          kind: 'paragraph',
          text: 'We may suspend or terminate your access to the App immediately and without notice if you:',
        },
        {
          kind: 'list',
          items: [
            'Breach these Terms or our Privacy Policy',
            'Use the App for any unlawful purpose',
            'Record without consent',
            'Provide false registration information',
          ],
        },
        {
          kind: 'paragraph',
          text: 'Upon termination, your right to use the App ceases immediately. We will handle your data in accordance with the retention periods set out in our Privacy Policy. Where you request account deletion, personal data is permanently deleted within 30 days of the request, except where a longer statutory retention period applies.',
        },
      ],
    },
    {
      id: 'governing-law-and-disputes',
      title: '13. Governing Law and Disputes',
      blocks: [
        {
          kind: 'paragraph',
          text: 'These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.',
        },
        {
          kind: 'paragraph',
          text: `We encourage you to contact us at ${legal.email} before initiating any formal dispute — most issues can be resolved quickly and informally.`,
        },
      ],
    },
    {
      id: 'changes-to-these-terms',
      title: '14. Changes to These Terms',
      blocks: [
        {
          kind: 'paragraph',
          text: 'We may update these Terms from time to time. We will notify you of material changes via in-app notification and email at least 14 days before the changes take effect. Continued use of the App after that date constitutes acceptance.',
        },
      ],
    },
    {
      id: 'contact',
      title: '15. Contact',
      blocks: [
        {
          kind: 'list',
          items: [
            `${legal.companyName} (trading as "${siteConfig.name}")`,
            `Email: ${legal.email}`,
            `Post: ${legal.registeredAddress}`,
            `Company Registration Number: ${legal.companyNumber}`,
          ],
        },
      ],
    },
  ],
}
