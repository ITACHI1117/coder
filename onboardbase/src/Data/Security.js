const security = [
  {
    id: 1,
    header: "End to end encryption ",
    description:
      "Onboardbase uses AES-CBC (Cipher Block Chaining) for encryption at rest, a standard in cryptography (used by the US government) to encrypt critical data. In addition, we secure network communication with TLS 1.2 for encrypting data in transit and RSA on both server and client to eliminate Man-In-The-Middle(MITM) attacks during this process. ",
  },
  {
    id: 2,
    header: "Cloud infrastructure ",
    description:
      "Onboardbase utilizes Digital Ocean and AWS as its cloud service provider and leverages its security and compliance controls for data center physical security and cloud infrastructure. ",
  },
  {
    id: 3,
    header: "Continuous security testing ",
    description:
      "Onboardbase undergoes continuous security reviews, threat modeling, regular penetration tests, robust unit tests, and code audits for security, whether it's a feature or a bug. ",
  },
  {
    id: 4,
    header: "Vulnerability reports ",
    description:
      "We care about the security and availability of the data you have entrusted us with. If some vulnerability slipped past us, we'd love to hear about it. We'll try to mitigate the risk, identify the root cause, and improve our software and processes. ",
  },
];

export default security;
