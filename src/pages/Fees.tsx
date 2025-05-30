import React from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import { IndianRupee, CreditCard, FileText, HelpCircle } from "lucide-react";

const Fees = () => {
  return (
    <div>
      <PageHeader
        title="Fee Structure"
        subtitle="Transparent and comprehensive fee details for all programs"
        backgroundImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Fee Structure Tables */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Program-wise Fee Structure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Academic Year 2024-25
            </p>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                title: "B.Tech Programs",
                fees: [
                  { item: "Tuition Fee", amount: "₹95,000" },
                  { item: "Development Fee", amount: "₹15,000" },
                  { item: "Laboratory Fee", amount: "₹10,000" },
                  { item: "Library Fee", amount: "₹5,000" },
                  { item: "Total (Per Year)", amount: "₹1,25,000" },
                ],
              },
              {
                title: "MBA Program",
                fees: [
                  { item: "Tuition Fee", amount: "₹85,000" },
                  { item: "Development Fee", amount: "₹12,000" },
                  { item: "Library Fee", amount: "₹5,000" },
                  { item: "Computer Lab Fee", amount: "₹8,000" },
                  { item: "Total (Per Year)", amount: "₹1,10,000" },
                ],
              },
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="bg-[#0860b1] text-white p-6">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {program.title}
                  </h3>
                </div>
                <div className="p-6">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 text-gray-600">
                          Fee Component
                        </th>
                        <th className="text-right py-3 text-gray-600">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {program.fees.map((fee, idx) => (
                        <tr
                          key={idx}
                          className={`border-b ${
                            idx === program.fees.length - 1
                              ? "font-bold text-[#0860b1]"
                              : "text-gray-700"
                          }`}
                        >
                          <td className="py-3">{fee.item}</td>
                          <td className="text-right py-3">{fee.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Information */}
      <section className="py-20 px-6 md:px-12 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Payment Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple payment options available for your convenience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: CreditCard,
                title: "Online Payment",
                description:
                  "Pay securely through our payment gateway using Credit/Debit cards or Net Banking.",
              },
              {
                icon: IndianRupee,
                title: "Bank Transfer",
                description:
                  "Direct bank transfer through NEFT/RTGS to our institutional account.",
              },
              {
                icon: FileText,
                title: "DD/Cheque",
                description:
                  'Demand Draft or Cheque in favor of "MPGIN" payable at Nanded.',
              },
            ].map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-[#0860b1]/10 p-3 rounded-full">
                    <method.icon className="w-6 h-6 text-[#0860b1]" />
                  </div>
                  <h3 className="text-xl font-semibold">{method.title}</h3>
                </div>
                <p className="text-gray-600">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about fees and payments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Is there a fee concession for merit students?",
                answer:
                  "Yes, we offer merit-based scholarships that can cover up to 50% of the tuition fee.",
              },
              {
                question: "Can I pay the fees in installments?",
                answer:
                  "Yes, fees can be paid in two installments per semester with prior approval.",
              },
              {
                question: "Are there any additional charges?",
                answer:
                  "All mandatory fees are included in the structure. Optional facilities may have separate charges.",
              },
              {
                question: "What is the refund policy?",
                answer:
                  "Refunds are processed as per AICTE guidelines based on the withdrawal date.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0860b1]/10 p-2 rounded-full mt-1">
                    <HelpCircle className="w-5 h-5 text-[#0860b1]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fees;
