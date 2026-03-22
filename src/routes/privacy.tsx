import { createFileRoute } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SEOMeta } from "@/components/seo/SEOMeta";
import {
  Shield,
  Calendar,
  Mail,
  Eye,
  Lock,
  Server,
  Users,
  Cookie,
  Baby,
  RefreshCw,
  UserCheck,
} from "lucide-react";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

const LAST_UPDATED = "March 22, 2026";

function PrivacySection({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
          <Icon className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      </div>
      <div className="pl-[52px] text-muted-foreground leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
}

function PrivacyPage() {
  return (
    <>
      <SEOMeta
        title="Privacy Policy | Hurevo"
        description="Learn how Hurevo collects, uses, and protects your personal information. Our privacy policy outlines your rights and our data protection practices."
      />
      <div className="w-full min-h-screen bg-background">
        {/* Hero Header */}
        <div className="w-full bg-gradient-to-b from-primary/5 to-background border-b border-border">
          <div className="max-w-4xl mx-auto px-4 py-16 md:py-24 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
              <Shield className="w-4 h-4" />
              Data Protection
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We respect your privacy and are committed to protecting your
              personal data. Learn how we collect, use, and safeguard your
              information.
            </p>
            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              Last Updated: {LAST_UPDATED}
            </div>
          </div>
        </div>

        {/* Privacy Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Card className="shadow-sm">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Eye className="w-6 h-6 text-primary" />
                Privacy Policy
              </CardTitle>
              <CardDescription>
                This Privacy Policy explains how Hurevo (&quot;we,&quot;
                &quot;our,&quot; or &quot;us&quot;) collects, uses, discloses,
                and safeguards your information.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Separator className="mb-8" />

              {/* 1. Introduction */}
              <PrivacySection icon={Eye} title="1. Introduction">
                <p>
                  Hurevo (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
                  respects your privacy and is committed to protecting your
                  personal data. This Privacy Policy explains how we collect,
                  use, disclose, and safeguard your information when you visit
                  our website, use our services, or interact with us.
                </p>
                <p>
                  By using our services, you agree to the collection and use of
                  information in accordance with this policy. If you do not
                  agree with our policies and practices, please do not use our
                  services.
                </p>
              </PrivacySection>

              <Separator className="my-8" />

              {/* 2. Information We Collect */}
              <PrivacySection icon={Server} title="2. Information We Collect">
                <p>
                  We collect several types of information from and about users
                  of our services:
                </p>

                <h3 className="font-semibold text-foreground mt-4 mb-2">
                  Personal Data
                </h3>
                <p>
                  When you contact us, request a consultation, or use our
                  services, we may collect personally identifiable information,
                  including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and job title</li>
                  <li>Company name and industry</li>
                  <li>Contact information (email address, phone number)</li>
                  <li>Project requirements and business needs</li>
                </ul>

                <h3 className="font-semibold text-foreground mt-4 mb-2">
                  Usage Data
                </h3>
                <p>
                  We automatically collect information about how you interact
                  with our website and services, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website addresses</li>
                </ul>

                <h3 className="font-semibold text-foreground mt-4 mb-2">
                  Cookies and Similar Technologies
                </h3>
                <p>
                  We use cookies and similar tracking technologies to enhance
                  your browsing experience, analyze site traffic, and understand
                  where our visitors come from. You can instruct your browser to
                  refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </PrivacySection>

              <Separator className="my-8" />

              {/* 3. How We Use Your Information */}
              <PrivacySection
                icon={Lock}
                title="3. How We Use Your Information"
              >
                <p>
                  We use the information we collect for various purposes,
                  including to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, operate, and maintain our services</li>
                  <li>
                    Respond to your inquiries and provide customer support
                  </li>
                  <li>
                    Process and manage your project consultations and proposals
                  </li>
                  <li>
                    Send you technical notices, updates, and administrative
                    messages
                  </li>
                  <li>Improve our website, services, and user experience</li>
                  <li>Monitor and analyze usage patterns and trends</li>
                  <li>
                    Detect, prevent, and address technical issues and security
                    threats
                  </li>
                  <li>
                    Comply with legal obligations and enforce our agreements
                  </li>
                </ul>
              </PrivacySection>

              <Separator className="my-8" />

              {/* 4. Data Storage and Security */}
              <PrivacySection icon={Lock} title="4. Data Storage and Security">
                <p>
                  We implement appropriate technical and organizational measures
                  to protect your personal data against unauthorized access,
                  alteration, disclosure, or destruction. This includes
                  encryption, secure servers, and access controls.
                </p>
                <p>
                  Your data is stored on secure cloud infrastructure with
                  industry-leading providers. While we strive to use
                  commercially acceptable means to protect your personal data,
                  we cannot guarantee its absolute security. No method of
                  transmission over the Internet or electronic storage is 100%
                  secure.
                </p>
              </PrivacySection>

              <Separator className="my-8" />

              {/* 5. Third-Party Services */}
              <PrivacySection icon={Users} title="5. Third-Party Services">
                <p>
                  We may employ third-party companies and individuals to
                  facilitate our services, provide services on our behalf, or
                  assist us in analyzing how our services are used. These third
                  parties have access to your personal data only to perform
                  these tasks on our behalf and are obligated not to disclose or
                  use it for any other purpose.
                </p>
                <p>
                  Our website may contain links to third-party websites that are
                  not operated by us. We strongly advise you to review the
                  Privacy Policy of every site you visit. We have no control
                  over and assume no responsibility for the content, privacy
                  policies, or practices of any third-party sites or services.
                </p>
              </PrivacySection>

              <Separator className="my-8" />

              {/* 6. Your Rights */}
              <PrivacySection icon={UserCheck} title="6. Your Rights">
                <p>
                  Depending on your location, you may have certain rights
                  regarding your personal data:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Right to Access:</strong> You have the right to
                    request copies of your personal data.
                  </li>
                  <li>
                    <strong>Right to Correction:</strong> You have the right to
                    request correction of any information you believe is
                    inaccurate or incomplete.
                  </li>
                  <li>
                    <strong>Right to Deletion:</strong> You have the right to
                    request that we delete your personal data, under certain
                    conditions.
                  </li>
                  <li>
                    <strong>Right to Restrict Processing:</strong> You have the
                    right to request that we restrict the processing of your
                    personal data.
                  </li>
                  <li>
                    <strong>Right to Object:</strong> You have the right to
                    object to our processing of your personal data.
                  </li>
                  <li>
                    <strong>Right to Data Portability:</strong> You have the
                    right to request transfer of your data to another
                    organization or directly to you.
                  </li>
                </ul>
                <p>
                  To exercise any of these rights, please contact us using the
                  information provided in the Contact section.
                </p>
              </PrivacySection>

              <Separator className="my-8" />

              {/* 7. Cookies and Tracking */}
              <PrivacySection icon={Cookie} title="7. Cookies and Tracking">
                <p>
                  We use cookies and similar tracking technologies to track
                  activity on our services and hold certain information. Cookies
                  are files with small amounts of data which may include an
                  anonymous unique identifier.
                </p>
                <p>
                  You can instruct your browser to refuse all cookies or to
                  indicate when a cookie is being sent. However, if you do not
                  accept cookies, you may not be able to use some portions of
                  our services. We use cookies for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Essential cookies:</strong> Required for the website
                    to function properly
                  </li>
                  <li>
                    <strong>Analytics cookies:</strong> Help us understand how
                    visitors interact with our website
                  </li>
                  <li>
                    <strong>Preference cookies:</strong> Remember your settings
                    and preferences
                  </li>
                </ul>
              </PrivacySection>

              <Separator className="my-8" />

              {/* 8. Children's Privacy */}
              <PrivacySection icon={Baby} title="8. Children's Privacy">
                <p>
                  Our services are not intended for use by children under the
                  age of 13. We do not knowingly collect personally identifiable
                  information from children under 13. If you are a parent or
                  guardian and you are aware that your child has provided us
                  with personal data, please contact us. If we become aware that
                  we have collected personal data from children without
                  verification of parental consent, we take steps to remove that
                  information from our servers.
                </p>
              </PrivacySection>

              <Separator className="my-8" />

              {/* 9. Changes to This Policy */}
              <PrivacySection
                icon={RefreshCw}
                title="9. Changes to This Policy"
              >
                <p>
                  We may update our Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the &quot;Last Updated&quot; date at
                  the top. You are advised to review this Privacy Policy
                  periodically for any changes. Changes to this Privacy Policy
                  are effective when they are posted on this page.
                </p>
              </PrivacySection>

              <Separator className="my-8" />

              {/* 10. Contact Information */}
              <PrivacySection icon={Mail} title="10. Contact Information">
                <p>
                  If you have any questions about this Privacy Policy, or if you
                  would like to exercise any of your rights, please contact us:
                </p>
                <div className="bg-muted/50 rounded-lg p-6 mt-4">
                  <p className="font-semibold text-foreground mb-2">Hurevo</p>
                  <p className="mb-1">
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:hello@cognerest.com"
                      className="text-primary hover:underline"
                    >
                      hello@cognerest.com
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground mt-4">
                    We aim to respond to all inquiries within 48 hours during
                    business days.
                  </p>
                </div>
              </PrivacySection>

              <Separator className="my-8" />

              {/* 11. Data Protection Officer */}
              <PrivacySection
                icon={Shield}
                title="11. Data Protection Officer (Indonesia)"
              >
                <p>
                  In compliance with Indonesia&apos;s Personal Data Protection
                  Law (UU PDP), we have appointed a Data Protection Officer
                  (DPO) who is responsible for overseeing our data protection
                  strategy and ensuring compliance with applicable regulations.
                </p>
                <div className="bg-muted/50 rounded-lg p-6 mt-4">
                  <p className="font-semibold text-foreground mb-2">
                    Data Protection Officer
                  </p>
                  <p className="mb-1">
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:dpo@cognerest.com"
                      className="text-primary hover:underline"
                    >
                      dpo@cognerest.com
                    </a>
                  </p>
                </div>
                <p className="mt-4">
                  Indonesian residents have the right to submit complaints
                  regarding the processing of their personal data to the
                  Ministry of Communication and Informatics if they believe
                  their data protection rights have been violated.
                </p>
              </PrivacySection>

              {/* Acknowledgment Footer */}
              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  By using Hurevo&apos;s services, you acknowledge that you have
                  read and understood this Privacy Policy.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default PrivacyPage;
