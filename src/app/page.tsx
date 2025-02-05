'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Download, Palette, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CVGeneratorLanding() {
  return (
    <div className='flex flex-col min-h-screen bg-[#f8f9fa]'>
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className='px-6 h-20 flex items-center border-b backdrop-blur-sm bg-white/80 fixed w-full z-50'
      >
        <Link
          href='/'
          className='flex items-center gap-3 font-semibold hover:opacity-80 transition-opacity'
        >
          <FileText className='h-6 w-6 text-teal-700' />
          <span className='text-teal-700 text-lg tracking-tight'>
            JobResume!
          </span>
        </Link>
      </motion.header>

      <main className='flex-1 pt-20'>
        {/* Hero Section */}
        <section className='min-h-[90vh] flex items-center relative overflow-hidden'>
          <div className='absolute inset-0 bg-slate-50 -z-10' />
          <div className='container px-4 md:px-6 mx-auto'>
            <div className='flex flex-col lg:flex-row items-center gap-12 py-16'>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className='flex-1 space-y-8'
              >
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-teal-700 leading-tight'>
                  Elevate Your Career with
                  <span className='block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-800 to-slate-400'>
                    a Standout Resume
                  </span>
                </h1>

                <p className='text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl'>
                  Create stunning, ATS-friendly resumes that capture attention
                  and showcase your potential. Simple, elegant, and completely
                  free.
                </p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className='flex gap-4 items-center'
                >
                  <Button
                    size='lg'
                    className='bg-teal-800 hover:bg-teal-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 flex items-center gap-2 group'
                    asChild
                  >
                    <Link href='/create'>
                      Make It Happen
                      <ArrowRight className='h-5 w-5 group-hover:translate-x-1 transition-transform' />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className='flex-1'
              >
                <div className='relative'>
                  <div className='absolute inset-30 bg-gradient-to-tr from-teal-100 to-transparent rounded-2xl transform rotate-3' />
                  <Image
                    src='/hiring.svg'
                    width={500}
                    height={500}
                    alt='CV Preview'
                    className='rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300'
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className='py-24 bg-white'>
          <div className='container px-4 md:px-6 mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-center space-y-4 mb-16'
            >
              <h2 className='text-3xl md:text-4xl font-bold text-teal-800'>
                Craft Your Perfect Resume
              </h2>
              <p className='text-lg text-slate-600 max-w-2xl mx-auto'>
                Everything you need to create a professional Resume that makes
                an impact
              </p>
            </motion.div>

            <div className='grid md:grid-cols-3 gap-8'>
              {[
                {
                  icon: Clock,
                  title: 'Swift & Seamless',
                  description:
                    'Create your professional CV in minutes with our intuitive interface'
                },
                {
                  icon: Palette,
                  title: 'Elegant Templates',
                  description:
                    'Choose from our collection of carefully crafted, ATS-optimized designs'
                },
                {
                  icon: Download,
                  title: 'Instant Export',
                  description:
                    'Download your polished CV in PDF format with a single click'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className='border-none shadow-lg hover:shadow-xl transition-shadow duration-300'>
                    <CardContent className='p-8 flex flex-col items-center text-center space-y-4'>
                      <feature.icon className='h-12 w-12 text-teal-800' />
                      <h3 className='text-xl font-semibold text-teal-800'>
                        {feature.title}
                      </h3>
                      <p className='text-slate-600'>{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className='bg-slate-900 text-white py-16'>
          <div className='container px-4 md:px-6 mx-auto'>
            <div className='flex flex-col md:flex-row justify-between items-start gap-8'>
              <div className='space-y-4'>
                <Link
                  href='/'
                  className='flex items-center gap-2 font-semibold'
                >
                  <FileText className='h-6 w-6' />
                  <span className='text-lg'>JobResume!</span>
                </Link>
                <p className='text-slate-400 max-w-xs'>
                  Empowering careers through professional resume creation
                </p>
              </div>

              <div className='flex gap-12'>
                <div className='space-y-4'>
                  <h4 className='font-semibold'>Legal</h4>
                  <div className='flex flex-col gap-2'>
                    <Link
                      href='#'
                      className='text-slate-400 hover:text-white transition-colors'
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      href='#'
                      className='text-slate-400 hover:text-white transition-colors'
                    >
                      Terms of Service
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className='border-t border-slate-800 mt-12 pt-8 text-slate-400 text-sm'>
              © {new Date().getFullYear()} JobResume! All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
