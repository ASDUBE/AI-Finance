import HeroSection from '@/components/hero';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from '@/data/landingpage';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="mt-40">
      <HeroSection />

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4  gap-8">
            {statsData.map((statsData, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {statsData.value}{' '}
                </div>
                <div className="text-gray-600">{statsData.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto px-4 container">
          <h2 className="text-3xl mb-12 font-bold text-center">
            Everything you need to manage your finances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4 pt-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600"> {feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="mx-auto px-4 container">
          <h2 className="text-3xl mb-16 font-bold text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto px-4 container">
          <h2 className="text-3xl mb-12 font-bold text-center">
            Our Talk in the Town
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-4">
                  {testimonial.icon}
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.image}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600">
        <div className="mx-auto px-4 container text-center">
          <h2 className="text-3xl mb-4 font-bold text-center text-white">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join Thousands of users who are managing thier finances smartly with
            wealth
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="animate-bounce bg-white text-blue-600 hover:bg-blue-50"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
