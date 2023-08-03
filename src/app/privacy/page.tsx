import ReactMarkdown from "react-markdown";

export default function Privacy() {
  return (
    <main>
      <div className="flex flex-col items-center justify-between">
        <h1>Privacy policy</h1>
      </div>
      <h2>Information We Collect</h2>
      <p>
        We do not collect any personal information from visitors to the Website.
        The only data we gather is non-personally identifiable information
        provided by Google Analytics, which includes, but is not limited to,
        your device type, browser type, operating system, IP address, and pages
        visited on the Website. This data is collected in an aggregated and
        anonymous form and is used solely for analytical purposes to help us
        improve the Website&apos;s content and user experience.
      </p>
      <h2>Use of Cookies</h2>
      <p>
        The Website uses cookies to enhance your browsing experience. A cookie
        is a small piece of data stored on your device that helps us improve the
        functionality of the Website and understand how you interact with it. By
        using cookies, we can track certain non-personally identifiable
        information about your visit, as mentioned in section 1. You can modify
        your browser settings to refuse cookies or notify you when they are
        being used. However, please note that blocking cookies may affect some
        features of the Website.
      </p>
      <h2>Third-Party Services</h2>
      <p>
        We use Google Analytics to collect and analyze the non-personal data
        mentioned in section 1. Google Analytics is a third-party service that
        may use cookies to track your interactions with the Website. For more
        information about Google Analytics and its privacy practices, please
        review their privacy policy at https://policies.google.com/privacy.
      </p>
      <h2>Data Security</h2>
      <p>
        We take reasonable measures to protect the non-personally identifiable
        data collected from the Website. However, please be aware that no method
        of data transmission over the internet or electronic storage is
        completely secure, and we cannot guarantee the absolute security of this
        data.
      </p>
      <h2>Changes to this Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        to our practices or for other operational, legal, or regulatory reasons.
        The date of the last update will be indicated at the beginning of this
        document. We encourage you to review this Privacy Policy periodically
        for any changes. Your continued use of the Website after any updates
        indicates your acceptance of the revised Privacy Policy.
      </p>
    </main>
  );
}
