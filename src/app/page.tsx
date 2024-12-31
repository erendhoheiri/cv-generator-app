import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Star, Download, Palette, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CVGeneratorLanding() {
  return (
    <div className='flex flex-col min-h-screen p-5 sm:p-5 md:p-5 lg:p-10 xl:p-20'>
      {/* Header */}
      <header className='px-4 lg:px-6 h-16 flex items-center border-b'>
        <Link href='/' className='flex items-center gap-2 font-semibold'>
          <FileText className='h-6 w-6' />
          <span>ForPeople!</span>
        </Link>
      </header>

      <main className='flex-1'>
        {/* Hero Section */}
        <section className='w-full py-4 md:py-8 lg:py-12 xl:py-16'>
          <div className='container px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
              <div className='flex flex-col justify-center space-y-4'>
                <div className='space-y-2'>
                  <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-4'>
                    Create professional CVs for free!
                  </h1>
                  <p className='max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400'>
                    Dive in and start building your dream CV today—it’s 100%
                    free ATS-friendly CV templates,, easy, and completely free!
                  </p>
                </div>
                <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                  <Button size='lg' asChild>
                    <Link href='/cv-maker'>Create CV Now</Link>
                  </Button>
                </div>
              </div>
              <Image
                src={'/illustration.jpeg'}
                width={550}
                height={550}
                alt='CV Preview'
                className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last lg:aspect-square'
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Everything You Need to Create a Stellar CV
                </h2>
                <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                  Our platform provides all the tools you need to create a
                  professional CV that stands out from the crowd.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3'>
              <Card>
                <CardContent className='flex flex-col items-center space-y-4 p-6'>
                  <Clock className='h-12 w-12 text-primary' />
                  <h3 className='text-xl font-bold'>Quick & Easy</h3>
                  <p className='text-center text-gray-500 dark:text-gray-400'>
                    Create your CV in minutes with our intuitive builder
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='flex flex-col items-center space-y-4 p-6'>
                  <Palette className='h-12 w-12 text-primary' />
                  <h3 className='text-xl font-bold'>Professional Templates</h3>
                  <p className='text-center text-gray-500 dark:text-gray-400'>
                    ATS-friendly templates that are easy to fill out
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='flex flex-col items-center space-y-4 p-6'>
                  <Download className='h-12 w-12 text-primary' />
                  <h3 className='text-xl font-bold'>Easy Export</h3>
                  <p className='text-center text-gray-500 dark:text-gray-400'>
                    Download your CV in PDF format with one click
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className='w-full py-12 md:py-24 lg:py-32  dark:bg-gray-800'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Trusted by Job Seekers
                </h2>
                <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                  See what our users say about their experience
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3'>
              {[1, 2, 3].map(testimonial => (
                <Card key={testimonial}>
                  <CardContent className='flex flex-col space-y-2 p-6'>
                    <div className='flex items-center space-x-1'>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className='h-5 w-5 fill-current text-yellow-500'
                        />
                      ))}
                    </div>
                    <p className='text-gray-500 dark:text-gray-400'>
                      &ldquo;The CV builder was incredibly easy to use. I
                      created a professional CV in no time!&rdquo;
                    </p>
                    <div className='flex items-center space-x-2'>
                      <div className='h-10 w-10 rounded-full bg-gray-200' />
                      <div>
                        <p className='font-semibold'>John Doe</p>
                        <p className='text-sm text-gray-500 dark:text-gray-400'>
                          Software Engineer
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='w-full py-12 bg-gray-100 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Ready to Create Your CV?
                </h2>
                <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                  Join thousands of job seekers who have successfully created
                  their CV with our platform
                </p>
              </div>
              <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                <Button size='lg' asChild>
                  <Link href='/cv-maker'>Create Your CV Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className='border-t'>
        <div className='container flex flex-col gap-4 py-10 md:flex-row md:justify-between'>
          <div className='flex flex-col gap-2'>
            <Link href='/' className='flex items-center gap-2 font-semibold'>
              <FileText className='h-6 w-6' />
              <span>ForPeople!</span>
            </Link>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              Create professional CVs for free!
            </p>
          </div>
          <div className='flex gap-12'></div>
        </div>
        <div className='border-t py-6'>
          <div className='container flex flex-col gap-2 md:flex-row md:items-center md:justify-between'>
            <p className='text-sm text-gray-500'>
              © {new Date().getFullYear()} CVMaker. All rights reserved.
            </p>
            <div className='flex gap-4'>
              <Link href='#' className='text-sm text-gray-500 hover:underline'>
                Privacy Policy
              </Link>
              <Link href='#' className='text-sm text-gray-500 hover:underline'>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
