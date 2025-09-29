import { Layout } from "@/components/layout/layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HelpCircle, MessageCircle } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "How does OpenNow work?",
      answer: "OpenNow connects shop owners with customers through real-time status updates. Shop owners use a simple toggle to mark their shop as open or closed, and customers can see this live status before visiting. No bookings, no payments - just simple visibility."
    },
    {
      question: "Is OpenNow free to use?",
      answer: "Yes! OpenNow is completely free for both customers and shop owners. There are no subscription fees, setup costs, or hidden charges."
    },
    {
      question: "How accurate are the shop statuses?",
      answer: "Shop statuses are updated directly by shop owners in real-time. We show timestamps for all updates so you know exactly when the status was last changed. If a status hasn't been updated in over 2 hours, we display a gentle warning that it may be outdated."
    },
    {
      question: "Can I get notified when a shop opens?",
      answer: "Yes! If a shop is currently closed, you can enable 'Ping me when open' notifications. We'll send you an email the moment that shop changes their status to open."
    },
    {
      question: "How do I claim my shop?",
      answer: "Shop owners can claim their listing by clicking 'I'm a shop owner' and following the verification process. Once claimed, you'll have full control over your shop's status, contact information, and business details."
    },
    {
      question: "What information do shops need to provide?",
      answer: "Basic information includes shop name, address, category, and contact details. Business hours and descriptions are optional but help customers find you. The only requirement is the ability to update your open/closed status."
    },
    {
      question: "Can I save my favorite shops?",
      answer: "Yes! Create a free account to save shops to your favorites list. You can also enable notifications for when your favorite closed shops open up."
    },
    {
      question: "What types of businesses can use OpenNow?",
      answer: "OpenNow is perfect for any local business with variable hours or walk-in customers: barber shops, cafés, bakeries, tailors, pharmacies, beauty salons, and more. If customers need to know 'are you open right now?', OpenNow is for you."
    },
    {
      question: "How do customers find my shop?",
      answer: "Customers discover shops through location-based search, category browsing, and text search. When you're marked as open, you'll appear higher in search results for nearby customers."
    },
    {
      question: "Can I add multiple shop locations?",
      answer: "Yes! Shop owners can manage multiple locations from a single account. Each location has its own status toggle and can be managed independently."
    },
    {
      question: "What if I forget to update my status?",
      answer: "We show timestamps on all statuses so customers know when it was last updated. If you forget, customers will see how long ago the status was changed. We recommend updating your status when you arrive and leave each day."
    },
    {
      question: "Is there a mobile app?",
      answer: "OpenNow works great in any web browser on mobile or desktop. The website is mobile-optimized, so shop owners can easily toggle their status on their phone throughout the day."
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about OpenNow
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA Section */}
        <div className="mt-16 text-center p-8 bg-muted/30 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/contact">
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact us
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/how-it-works">
                Learn how it works
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}