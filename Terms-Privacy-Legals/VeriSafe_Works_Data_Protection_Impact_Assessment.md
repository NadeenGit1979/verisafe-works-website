# VeriSafe Works — Data Protection Impact Assessment (DPIA)

**Document Reference:** VSW-DPIA-001
**Version:** 1.0
**Effective Date:** 10 July 2026
**Prepared By:** Nadeen
**Reviewed By:** Simon, Zain
**Next Review Date:** 10 July 2027
**ICO Registration Number:** ZC028351

**Data Controller:** Verisafe Software Limited (trading as "VeriSafe Works"), 75 Blackdown View, Ilminster, TA19 0BD. Company Registration Number: 16649843.

---

## Part 1 — Overview and Necessity of DPIA

### 1.1 Why This DPIA Is Required

Under UK GDPR Article 35, a Data Protection Impact Assessment is mandatory where processing is likely to result in a high risk to the rights and freedoms of natural persons. VeriSafe Works triggers this requirement because:

- The App systematically records audio and video inside private residential properties
- Recordings capture special category data (UK GDPR Article 9), including potential health information, religious artefacts, family composition and other intimate household details
- Processing involves large-scale recording of individuals in their own homes — one of the most sensitive environments imaginable
- The App uses AI-powered transcription (automated processing) of sensitive conversations
- The App is designed to operate in situations of inherent power imbalance (a stranger in a customer's home)

This DPIA is therefore not optional — it is a legal requirement before the App is made publicly available.

### 1.2 Description of Processing

| Element | Detail |
|---------|--------|
| Nature | Audio recording, video recording, photography, AI transcription, secure cloud storage, email delivery of transcripts |
| Scope | All active job sessions conducted via the App by registered Workers |
| Context | Private residential properties across the UK |
| Purposes | Job verification, dispute prevention, mutual protection of Workers and Customers |
| Data subjects | Workers (registered users), Customers (homeowners/residents), any third parties present during a session |
| Special categories | Audio/video may inadvertently capture health data, religious information, family details |

---

## Part 2 — Necessity and Proportionality

### 2.1 Is the Processing Necessary?

Yes. The core purpose of VeriSafe Works — providing transparent, verifiable records of tradesperson interactions — cannot be achieved without recording. The recording is the service.

### 2.2 Is the Processing Proportionate?

We have taken the following steps to ensure proportionality:

| Principle | How VeriSafe Works Complies |
|-----------|---------------------------|
| Data minimisation | Only job-relevant interactions are recorded — not continuous surveillance |
| Purpose limitation | Recordings used only for job verification and dispute resolution |
| Storage limitation | 90-day retention then permanent deletion |
| Consent-first | No recording commences without explicit verbal and in-app consent |
| Transparency | Customers receive a copy of all recordings and transcripts |
| Security | AES-256 encryption at rest, TLS 1.3 in transit, with access restricted to authorised personnel |

### 2.3 Lawful Basis Assessment

| Processing Activity | Lawful Basis | Condition for Special Category |
|-------------------|-------------|-------------------------------|
| In-session audio recording | Explicit Consent (Art 6(1)(a)) | Explicit Consent (Art 9(2)(a)) |
| Video and photography | Explicit Consent (Art 6(1)(a)) | Explicit Consent (Art 9(2)(a)) |
| AI transcription | Explicit Consent (Art 6(1)(a)) | Explicit Consent (Art 9(2)(a)) |
| Transcript delivery to Customer | Contract (Art 6(1)(b)) | N/A — service delivery |
| Dispute resolution records | Legitimate Interests (Art 6(1)(f)) | Legal claims (Art 9(2)(f)) |
| Account data | Contract (Art 6(1)(b)) | N/A |

---

## Part 3 — Risk Identification and Assessment

### 3.1 Risk Register

| Risk ID | Risk Description | Likelihood | Severity | Overall Risk |
|---------|-----------------|-----------|---------|-------------|
| R01 | Recording without proper consent | Medium | High | HIGH |
| R02 | Unauthorised access to stored recordings | Low | Very High | HIGH |
| R03 | Data breach exposing in-home recordings | Low | Very High | HIGH |
| R04 | Recordings captured of third parties (children, visitors) | Medium | High | HIGH |
| R05 | Worker misuse of recordings (harassment, blackmail) | Low | Very High | HIGH |
| R06 | International transfer risks (OpenAI transcription) | Medium | Medium | MEDIUM |
| R07 | App crash during session causing incomplete consent record | Medium | Medium | MEDIUM |
| R08 | Retention beyond 90 days due to system error | Low | Medium | MEDIUM |
| R09 | Subject access request not fulfilled within 30 days | Low | Medium | MEDIUM |
| R10 | Data loss due to cloud provider failure | Low | High | MEDIUM |

### 3.2 Risk Mitigations

**R01 — Recording without consent:**
- App architecture requires consent confirmation before recording can commence
- Opening seconds of every recording capture verbal Customer acknowledgement
- Terms of Service make non-consensual recording a serious breach with grounds for immediate account termination
- Workers trained via in-app onboarding on consent requirements

**R02 / R03 — Unauthorised access / Data breach:**
- AES-256 encryption at rest on AWS
- TLS 1.3 encryption in transit
- Role-based access controls — minimum necessary access principle
- Multi-factor authentication on all administrative accounts
- Regular penetration testing
- 72-hour ICO breach notification procedure documented and tested

**R04 — Third parties captured in recordings:**
- In-app prompt reminds Workers to inform all persons present
- Privacy Policy covers incidental capture of third parties
- Consent notice displayed to Customer covers household members

**R05 — Worker misuse:**
- Workers cannot share recordings via the App — only Customers receive the transcript
- Terms of Service prohibit any sharing of recordings outside permitted purposes
- Account termination for breach, with legal referral for serious cases

**R06 — International transfers (OpenAI):**
- Standard Contractual Clauses in place with OpenAI
- Transfer Impact Assessment completed
- Only audio data (not account/identity data) transmitted for transcription
- OpenAI's zero data retention API setting enabled

**R07 — App crash during session:**
- Session state preserved locally on device during crash
- Incomplete sessions flagged in admin dashboard for review
- Consent record stored separately from recording data

**R08 — Retention beyond 90 days:**
- Automated deletion job runs daily via BullMQ queue
- Deletion confirmed by audit log entry
- Monthly audit of retention compliance

---

## Part 4 — Residual Risk Assessment

After mitigations, the residual risk profile is assessed as:

| Risk | Residual Level | Acceptable? |
|------|---------------|-------------|
| R01 — Consent failure | LOW | Yes ✅ |
| R02 — Unauthorised access | LOW | Yes ✅ |
| R03 — Data breach | LOW | Yes ✅ |
| R04 — Third party capture | LOW-MEDIUM | Yes — unavoidable, mitigated ✅ |
| R05 — Worker misuse | LOW | Yes ✅ |
| R06 — International transfer | LOW | Yes ✅ |
| R07 — App crash | LOW | Yes ✅ |
| R08 — Retention error | LOW | Yes ✅ |

**Overall DPIA Outcome:** Processing may proceed. No prior ICO consultation required, on the basis that the mitigations described above are fully implemented and verified before launch.

---

## Part 5 — Consultation

### 5.1 Internal Consultation

- Simon — to review technical security measures
- Zain — to review lawful basis and consent architecture
- Zain — to approve final DPIA

### 5.2 External Consultation

This DPIA does not require prior consultation with the ICO, as residual risks are assessed as acceptable after mitigation. This conclusion should be confirmed by a qualified data protection advisor once the mitigations in Part 3.2 have been implemented and tested.

---

## Part 6 — Sign-Off and Review

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Data Controller | Nadeen | | |
| Technical Lead | Simon | | |
| Legal Advisor | Zain | | |

**Next Scheduled Review:** 10 July 2027 (or sooner upon any significant change to processing activities)

**Trigger events requiring immediate review:**
- Significant change to App functionality involving new data processing
- Data breach affecting recordings
- New third-party processor engaged
- Regulatory guidance changes
- Any complaint or SAR revealing unexpected processing

---

*This DPIA was prepared in accordance with UK GDPR Article 35 and the ICO's DPIA guidance. It is a professionally drafted template, not legal advice — we recommend a qualified data protection advisor reviews and formally signs off this assessment (Part 6) before the App is made publicly available.*
