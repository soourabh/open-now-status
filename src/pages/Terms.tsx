import { Layout } from "@/components/layout/layout";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function Terms() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">
            Last updated: January 1, 2024
          </p>
        </div>

        <Card className="card-soft">
          <CardContent className="p-8 prose prose-slate max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing or using OpenNow, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Description of Service</h2>
                <p className="text-muted-foreground">
                  OpenNow is a platform that connects customers with local businesses by providing real-time open/closed status updates. We facilitate visibility and communication but do not provide booking, payment processing, or review services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">User Accounts</h2>
                <p className="text-muted-foreground mb-4">To use certain features of OpenNow, you must create an account. You agree to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account</li>
                  <li>Notify us immediately of any unauthorized use</li>
                  <li>Accept responsibility for all activities under your account</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Business Owner Responsibilities</h2>
                <p className="text-muted-foreground mb-4">If you claim or create a business listing, you agree to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Provide accurate business information</li>
                  <li>Update your open/closed status regularly</li>
                  <li>Respond to customer inquiries in good faith</li>
                  <li>Not misrepresent your business or services</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Prohibited Uses</h2>
                <p className="text-muted-foreground mb-4">You may not use OpenNow to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Violate any local, state, national, or international law</li>
                  <li>Transmit harmful, offensive, or inappropriate content</li>
                  <li>Impersonate another person or entity</li>
                  <li>Interfere with or disrupt the service</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use automated systems to access the platform</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Content and Intellectual Property</h2>
                <p className="text-muted-foreground">
                  You retain ownership of content you submit to OpenNow but grant us a license to use, display, and distribute it as part of the service. OpenNow and its original content are protected by copyright, trademark, and other laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Disclaimer of Warranties</h2>
                <p className="text-muted-foreground">
                  OpenNow is provided "as is" without warranties of any kind. We do not guarantee the accuracy of business information or status updates. Users rely on this information at their own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  To the maximum extent permitted by law, OpenNow shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Privacy</h2>
                <p className="text-muted-foreground">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Termination</h2>
                <p className="text-muted-foreground">
                  We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users or the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. We will notify users of any changes by posting the new Terms on this page. Continued use of the service after changes constitutes acceptance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms are governed by and construed in accordance with the laws of the jurisdiction in which OpenNow operates, without regard to conflict of law principles.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms of Service, please contact us at legal@opennow.com.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}