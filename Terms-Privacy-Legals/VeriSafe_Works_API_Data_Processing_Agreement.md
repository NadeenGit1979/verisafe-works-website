# VeriSafe Works — API & Third-Party Data Processing Agreement

**Document Reference:** VSW-DPA-001
**Version:** 1.0
**Effective Date:** 10 July 2026

**Data Controller:** Verisafe Software Limited (trading as "VeriSafe Works"), 75 Blackdown View, Ilminster, TA19 0BD. Company Registration Number: 16649843. ICO Registration Number: ZC028351.

---

## 1. Purpose and Scope

This Data Processing Agreement ("DPA") governs the processing of personal data by third-party API services and technology providers engaged by Verisafe Software Limited, trading as "VeriSafe Works" ("Controller"), in connection with the operation of the VeriSafe Works mobile application and backend platform.

This DPA is required under UK GDPR Article 28, which mandates that any engagement of a data processor must be governed by a binding contract setting out the subject matter, duration, nature and purpose of the processing.

---

## 2. Third-Party Processors Engaged

### 2.1 OpenAI — AI Transcription

| Field | Detail |
|-------|--------|
| Purpose | Converting audio recordings to text transcripts |
| Data Shared | Audio files only — no account or identity data |
| Legal Basis | Explicit consent (obtained from Customer before session) |
| Transfer Mechanism | Standard Contractual Clauses (SCCs) |
| Data Location | USA |
| Retention by Processor | Zero data retention API setting enabled |
| OpenAI DPA | Available at openai.com/policies/data-processing-addendum |

**Risk Mitigations:**
- Audio files are transmitted over TLS 1.3 encrypted connections
- No personally identifiable metadata is transmitted with audio files
- OpenAI's enterprise API zero-retention setting is activated — audio is not stored or used for model training
- Transfer Impact Assessment completed — SCCs provide adequate safeguards

**Required App Store Disclosure:** The App uses AI-powered transcription. Audio from sessions is temporarily processed by a third-party AI service under strict data protection agreements. Audio is not retained by the AI provider after transcription is complete.

### 2.2 Amazon Web Services (AWS) — Cloud Storage

| Field | Detail |
|-------|--------|
| Purpose | Secure storage of audio, video, photos and transcripts |
| Data Shared | All session recordings and transcripts |
| Legal Basis | Explicit consent / Contract |
| Transfer Mechanism | UK/EU regions — no international transfer |
| Data Location | AWS eu-west-2 (London) or eu-west-1 (Ireland) |
| AWS DPA | Available at aws.amazon.com/agreement |

**Security Configuration:**
- S3 buckets configured with server-side encryption (AES-256)
- Bucket policies restrict access to authorised application roles only
- Public access blocked at account level
- Versioning disabled on recording buckets (prevents retention beyond policy)
- Lifecycle policies enforce 90-day automatic deletion

### 2.3 Firebase (Google) — Push Notifications and Analytics

| Field | Detail |
|-------|--------|
| Purpose | Delivering push notifications to Workers; anonymised usage analytics |
| Data Shared | Device tokens; anonymised usage events |
| Legal Basis | Contract (notifications) / Legitimate Interests (analytics) |
| Transfer Mechanism | SCCs in place with Google |
| Data Location | USA (EU data processing addendum available) |
| Firebase DPA | Available at firebase.google.com/terms/data-processing-terms |

**App Store Disclosure:** The App uses Firebase for push notifications and anonymised usage analytics. Firebase is operated by Google and processes device identifiers under Google's Data Processing Terms.

### 2.4 PostgreSQL Database — Core Data Storage

| Field | Detail |
|-------|--------|
| Purpose | Storing account data, job records, metadata |
| Hosting | Amazon Web Services (AWS) — UK region (London) |
| Data Location | UK/EU |
| Encryption | At rest and in transit |

### 2.5 Redis / BullMQ — Job Queue Processing

| Field | Detail |
|-------|--------|
| Purpose | Processing background jobs, including automated deletion tasks |
| Data Shared | Job metadata only — no recording content |
| Data Location | UK/EU |

---

## 3. App Store Privacy Declarations

### 3.1 Google Play Store — Data Safety Section

The following must be declared in the Google Play Console Data Safety form:

**Data Collected:**

| Data Type | Collected | Shared | Optional |
|-----------|----------|--------|---------|
| Name | Yes | No | No |
| Email address | Yes | No | No |
| Phone number | Yes | No | No |
| Audio recordings | Yes | No | No |
| Photos and videos | Yes | No | No |
| Device identifiers | Yes | No | No |
| App interactions | Yes | No | Yes |
| Crash logs | Yes | No | Yes |

**Data Purposes to declare:** App functionality, Account management, Fraud prevention, Analytics

**Security Practices to declare:**
- Data encrypted in transit ✅
- Data encrypted at rest ✅
- Users can request data deletion ✅
- Data not sold to third parties ✅

### 3.2 Apple App Store — Privacy Nutrition Label

The following must be declared in App Store Connect:

**Data Used to Track You:** None

**Data Linked to You:**
- Contact info (name, email, phone)
- Audio data (recordings)
- Photos and videos
- Identifiers (device ID)

**Data Not Linked to You:**
- Usage data (anonymised analytics)
- Diagnostics (crash logs)

---

## 4. Processor Obligations

All data processors engaged by Verisafe Software Limited are contractually required to:

- Process personal data only on documented instructions from Verisafe Software Limited
- Ensure persons authorised to process data are bound by confidentiality obligations
- Implement appropriate technical and organisational security measures
- Not engage sub-processors without prior written consent from Verisafe Software Limited
- Assist Verisafe Software Limited in fulfilling data subject rights requests
- Delete or return all personal data upon termination of the agreement
- Make available all information necessary to demonstrate compliance with UK GDPR Article 28
- Allow and contribute to audits and inspections by Verisafe Software Limited

---

## 5. Data Subject Rights Fulfilment

VeriSafe Works maintains the following procedures for handling data subject rights requests involving processor data:

| Right | Procedure | Timeline |
|-------|-----------|----------|
| Subject Access Request | Retrieve data from AWS, PostgreSQL and Firebase | Within 30 days |
| Erasure Request | Delete from AWS S3, PostgreSQL, Firebase (where technically possible) | Within 30 days |
| Portability | Export audio, transcript and job records in standard formats | Within 30 days |
| Restriction | Flag account for restricted processing across all systems | Within 72 hours |

All rights requests should be submitted to: **privacy@verisafe.works**

---

## 6. Breach Notification Procedure

In the event of a personal data breach involving any processor:

1. Processor notifies VeriSafe Works without undue delay (target: within 24 hours of discovery)
2. VeriSafe Works assesses whether the breach is notifiable to the ICO (threshold: likely risk to individuals)
3. ICO notified within 72 hours if the threshold is met (UK GDPR Article 33)
4. Affected individuals notified without undue delay if high risk to their rights and freedoms (UK GDPR Article 34)
5. Breach documented in the internal breach register regardless of whether notification is required

---

## 7. Review and Updates

This DPA must be reviewed:

- Annually from the effective date
- Upon engagement of any new third-party processor
- Upon material change to any existing processor relationship
- Upon any regulatory guidance update affecting processor requirements

---

*This document was prepared in accordance with UK GDPR Article 28, ICO guidance on contracts with processors, and Apple App Store and Google Play Store privacy declaration requirements. It is a professionally drafted template, not legal advice; we recommend a qualified solicitor reviews this DPA — and confirms the underlying processor contracts are actually in place — before publication.*
