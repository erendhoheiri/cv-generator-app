'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-center space-y-6 p-8'
      >
        <Image
          src='/online-resume.svg'
          alt='404 Illustration'
          width={300}
          height={300}
          className='mx-auto'
          priority
        />

        <div className='space-y-2'>
          <h2 className='text-2xl font-semibold text-zinc-700 dark:text-zinc-300'>
            Page Not Found
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            Sorry, the page you are looking for could not be found.
          </p>
        </div>

        <Link
          href='/'
          className='inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors'
        >
          <FileText className='w-4 h-4' />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
