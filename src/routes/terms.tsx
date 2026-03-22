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
  FileText,
  Calendar,
  Scale,
  Shield,
  CreditCard,
  Mail,
  Globe,
  AlertCircle,
  CheckCircle,
  XCircle,
  RefreshCw,
} from "lucide-react";

export const Route = createFileRoute("/terms")({
  component: TermsOfService,
});

function TermsSection({
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

function TermsOfService() {
  const lastUpdated = "March 22, 2026";
  const companyName = "Hurevo";
  const companyEmail = "hello@cognerest.com";
  const jurisdiction = "Indonesia";

  return (
    <>
      <SEOMeta
        title="Terms of Service | Hurevo"
        description="Read our Terms of Service to understand the terms and conditions for using Hurevo's technology consulting and cloud hosting services."
      />
      <div className="w-full min-h-screen bg-background">
        {/* Hero Header */}
        <div className="w-full bg-gradient-to-b from-primary/5 to-background border-b border-border">
          <div className="max-w-4xl mx-auto px-4 py-16 md:py-24 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
              <Scale className="w-4 h-4" />
              Legal Agreement
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Please read these terms carefully before using our services. By
              accessing or using {companyName}&apos;s services, you agree to be
              bound by these terms.
            </p>
            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              Last Updated: {lastUpdated}
            </div>
          </div>
        </div>

        {/* Terms Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Card className="shadow-sm">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                Terms and Conditions
              </CardTitle>
              <CardDescription>
                These Terms of Service govern your use of {companyName}&apos;s
                website, consulting services, and HCS Cloud Hosting platform.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Separator className="mb-8" />

              {/* Section 1: Acceptance of Terms */}
              <TermsSection icon={CheckCircle} title="1. Acceptance of Terms">
                <p>
                  By accessing or using any part of {companyName}&apos;s
                  services, including but not limited to our website, consulting
                  services, and HCS Cloud Hosting platform (collectively, the
                  &quot;Services&quot;), you agree to be bound by these Terms of
                  Service. If you do not agree to all the terms and conditions
                  of this agreement, you may not access the Services.
                </p>
                <p>
                  These Terms apply to all visitors, users, and others who
                  access or use the Services. You represent and warrant that you
                  are at least 18 years of age and have the legal capacity to
                  enter into these Terms.
                </p>
              </TermsSection>

              <Separator className="my-8" />

              {/* Section 2: Description of Services */}
              <TermsSection icon={Globe} title="2. Description of Services">
                <p>{companyName} provides the following services:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Technology Consulting:</strong> Custom software
                    development, automation and integration solutions,
                    AI-powered systems, and legacy system modernization
                    services.
                  </li>
                  <li>
                    <strong>HCS Cloud Hosting:</strong> Cloud infrastructure and
                    hosting services designed to support enterprise applications
                    with high availability, security, and scalability.
                  </li>
                </ul>
                <p>
                  We reserve the right to modify, suspend, or discontinue any
                  part of the Services at any time, with or without notice. We
                  shall not be liable to you or any third party for any
                  modification, suspension, or discontinuation.
                </p>
              </TermsSection>

              <Separator className="my-8" />

              {/* Section 3: User Accounts and Responsibilities */}
              <TermsSection
                icon={Shield}
                title="3. User Accounts and Responsibilities"
              >
                <p>
                  To access certain features of the Services, you may be
                  required to create an account. You are responsible for
                  maintaining the confidentiality of your account credentials
                  and for all activities that occur under your account.
                </p>
                <p>You agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Provide accurate, current, and complete information during
                    registration
                  </li>
                  <li>
                    Promptly update your account information to keep it accurate
                  </li>
                  <li>
                    Notify us immediately of any unauthorized use of your
                    account
                  </li>
                  <li>
                    Use the Services only for lawful purposes and in accordance
                    with these Terms
                  </li>
                  <li>
                    Not use the Services to transmit any harmful code, malware,
                    or engage in any activity that disrupts the Services
                  </li>
                </ul>
              </TermsSection>

              <Separator className="my-8" />

              {/* Section 4: Payment Terms */}
              <TermsSection icon={CreditCard} title="4. Payment Terms">
                <p>
                  For consulting services, payment terms will be specified in
                  individual Statements of Work (SOW) or proposals. Unless
                  otherwise stated:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>A deposit may be required before work begins</li>
                  <li>
                    Milestone-based payments may apply for larger projects
                  </li>
                  <li>
                    Net-14 payment terms apply to invoices unless otherwise
                    agreed
                  </li>
                  <li>
                    Late payments may incur a service charge of 1.5% per month
                  </li>
                </ul>
                <p>
                  For HCS Cloud Hosting services, subscription fees are billed
                  in advance on a monthly or annual basis. You authorize us to
                  charge your payment method for all fees incurred. All fees are
                  non-refundable except as required by law or as explicitly
                  stated in a separate agreement.
                </p>
              </TermsSection>

              <Separator className="my-8" />

              {/* Section 5: Intellectual Property */}
              <TermsSection icon={FileText} title="5. Intellectual Property">
                <p>
                  <strong>Our Intellectual Property:</strong> All content,
                  features, and functionality of the Services, including but not
                  limited to text, graphics, logos, and software, are the
                  exclusive property of {companyName} and are protected by
                  international copyright, trademark, and other intellectual
                  property laws.
                </p>
                <p>
                  <strong>Client Work:</strong> Upon full payment, clients
                  receive ownership rights to custom deliverables created
                  specifically for them under a Statement of Work, excluding our
                  pre-existing intellectual property, tools, and frameworks used
                  in the development process.
                </p>
                <p>
                  <strong>License to Use:</strong> We grant you a limited,
                  non-exclusive, non-transferable license to use the Services
                  for their intended purpose, subject to these Terms.
                </p>
              </TermsSection>

              <Separator className="my-8" />

              {/* Section 6: Limitation of Liability */}
              <TermsSection
                icon={AlertCircle}
                title="6. Limitation of Liability"
              >
                <p>
                  To the maximum extent permitted by applicable law,{" "}
                  {companyName} and its directors, employees, partners, and
                  agents shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, including without
                  limitation, loss of profits, data, use, goodwill, or other
                  intangible losses, resulting from:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Your access to or use of, or inability to access or use, the
                    Services
                  </li>
                  <li>
                    Any conduct or content of any third party on the Services
                  </li>
                  <li>Any content obtained from the Services</li>
                  <li>
                    Unauthorized access, use, or alteration of your
                    transmissions or content
                  </li>
                </ul>
                <p>
                  In no event shall our total liability exceed the amount you
                  paid to us in the twelve (12) months preceding the event
                  giving rise to liability, or one hundred US dollars (USD 100),
                  whichever is greater.
                </p>
              </TermsSection>

              <Separator className="my-8" />

              {/* Section 7: Termination */}
              <TermsSection icon={XCircle} title="7. Termination">
                <p>
                  We may terminate or suspend your account and access to the
                  Services immediately, without prior notice or liability, for
                  any reason, including without limitation if you breach these
                  Terms.
                </p>
                <p>Upon termination:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your right to use the Services will immediately cease</li>
                  <li>
                    All provisions of these Terms which by their nature should
                    survive termination shall survive
                  </li>
                  <li>
                    For cloud hosting services, data will be retained for 30
                    days after termination, after which it may be permanently
                    deleted
                  </li>
                </ul>
                <p>
                  You may terminate your account at any time by contacting us.
                  You remain responsible for all charges incurred up to the date
                  of termination.
                </p>
              </TermsSection>

              <Separator className="my-8" />

              {/* Section 8: Governing Law */}
              <TermsSection icon={Scale} title="8. Governing Law">
                <p>
                  These Terms shall be governed and construed in accordance with
                  the laws of {jurisdiction}, without regard to its conflict of
                  law provisions.
                </p>
                <p>
                  Any dispute arising out of or in connection with these Terms,
                  including any question regarding their existence, validity, or
                  termination, shall be referred to and finally resolved by
                  arbitration in Jakarta, {jurisdiction} in accordance with the
                  rules of the Indonesian National Board of Arbitration (BANI).
                  The language of arbitration shall be English.
                </p>
                <p>
                  Notwithstanding the foregoing, either party may seek
                  injunctive or other equitable relief in any court of competent
                  jurisdiction to prevent irreparable harm pending the
                  completion of arbitration.
                </p>
              </TermsSection>

              <Separator className="my-8" />

              {/* Section 9: Changes to Terms */}
              <TermsSection icon={RefreshCw} title="9. Changes to Terms">
                <p>
                  We reserve the right, at our sole discretion, to modify or
                  replace these Terms at any time. If a revision is material, we
                  will provide at least 30 days&apos; notice prior to any new
                  terms taking effect.
                </p>
                <p>
                  What constitutes a material change will be determined at our
                  sole discretion. By continuing to access or use our Services
                  after any revisions become effective, you agree to be bound by
                  the revised terms.
                </p>
                <p>
                  We encourage you to review these Terms periodically for any
                  changes. Changes to these Terms are effective when they are
                  posted on this page.
                </p>
              </TermsSection>

              <Separator className="my-8" />

              {/* Section 10: Contact Information */}
              <TermsSection icon={Mail} title="10. Contact Information">
                <p>
                  If you have any questions about these Terms, please contact
                  us:
                </p>
                <div className="bg-muted/50 rounded-lg p-6 mt-4">
                  <p className="font-semibold text-foreground mb-2">
                    {companyName}
                  </p>
                  <p className="mb-1">
                    <strong>Email:</strong>{" "}
                    <a
                      href={`mailto:${companyEmail}`}
                      className="text-primary hover:underline"
                    >
                      {companyEmail}
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground mt-4">
                    We aim to respond to all inquiries within 48 hours during
                    business days.
                  </p>
                </div>
              </TermsSection>

              {/* Acknowledgment Footer */}
              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  By using {companyName}&apos;s services, you acknowledge that
                  you have read, understood, and agree to be bound by these
                  Terms of Service.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default TermsOfService;
