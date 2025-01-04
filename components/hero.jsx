'use client';
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="pb-20 px-4">
      <div className="container text-center mx-auto">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
          Manage your Finances <br />
          With Intelligence
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>
        <div>
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get started
            </Button>
          </Link>
          <Link href="/x">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>
        <div>
          <div>
            <Image
              src="/banner.jpeg"
              width={1280}
              height={720}
              alt="banner"
              priority
              className="rounded-lg shadow-2xl border mx-auto "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
