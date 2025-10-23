'use client'
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Image from 'next/image';
import Button from '@/shared/Button';
import Subscribe from './Subscribe';

const QuickLinks = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const links = [
    {
      title: 'NEW ARRIVALS',
      contents: [
        { type: 'text', value: '2025' },
        { type: 'text', value: 'Books' },
        {
          type: 'link',
          value: 'New Arrivals',
          href: 'https://static1.squarespace.com/static/638476bc795c4e5410b55317/t/67d7aa289773ff06c25bd72a/1742187049526/New+Arrivels+2025.pdf',
        },
      ],
    },
    {
      title: 'WEB OPAC',
      contents: [
        {
          type: 'text',
          value:
            'The entire library collection is automated and the same can be accessed anywhere by anyone with the help of Web-OPAC (Web Online Public Access Catalogue) which includes books and theses. However, the full text of theses can be accessed only within the campus.',
        },
        {
          type: 'html',
          value:
            'The link to access Web-OPAC (Online Public Access Catalogue): <a href="https://opac.aims.ac.in" target="_blank" rel="noopener noreferrer" class="text-[#531675] font-semibold ">View</a>',
        },
        {
          type: 'bullets',
          title: 'How to use Web OPAC',
          items: [
          ],
        },
        { type: 'text', value: '1. Title' },
        { type: 'text', value: '2. Author' },
        { type: 'text', value: '3. Subject' },
        { type: 'text', value: '4. Keywords' },
        { type: 'text', value: '5. Classification Number' },
        { type: 'text', value: '6. Accession Number' },
        { type: 'text', value: '7. Anywhere' },
        {
          type: 'html',
          value:
            '<strong>For example,</strong> if you search for a particular title under the "Title" display, the title is displayed if available in the library collection. When you click on the title, all the details of the book such as title, author, subject, call number, accession number, publication details etc. are displayed.',
        },
      ],
    },
    {
      title: 'LIBRARY RULES AND REGULATIONS',
      contents: [
        {
          type: 'text',
          value:
            'All students and staff of AIMS, Peenya, Bengaluru, are eligible for library membership, while others require prior permission from the Principal and Chief Librarian; membership is linked to your college ID, and can be obtained by submitting the Google form on the AIMS Library website.',
        },
        {
          type: 'table',
          headers: ['User Categories', 'No of Books Issued', 'Duration', 'Fine'],
          rows: [
            ['UG Students', '2', '15 days', '1'],
            ['PG Students', '3', '15 days', '1'],
            ['Faculty Members', '5', '30 days', '1'],
          ],
        },
        {
          type: 'bullets',
          title: 'Books Issue/Borrowing Policies',
          items: [
            'College ID card is a must and should be shown for borrowing library resources',
            'Return books on or before the due date',
            'Reference books, journals, theses and dissertations are not issued for home reading',
            'Students are not permitted to take two books with the same title and author',
            'Do not mark, write, or cut pages',
            'Report immediately lost/damaged books to the librarian',
            'Lost or Damaged Books: The loser is responsible for replacing the books',
          ],
        },
        {
          type: 'bullets',
          title: 'General Rules',
          items: [
            'Students must present their College ID upon entering or when requested by the Librarian',
            'Deposit bags, gowns, umbrellas, etc., at the Property Counter. Valuables are allowed, but the library is not responsible for loss or damage',
            'Enter your name and details in the gate register at the entrance',
            'Keep mobile phones on silent mode before entering; no eatables or drinks allowed (water facilities available)',
            'Loud talking, conversations, and discussions are strictly prohibited',
            'Report any library issues to the librarian',
            'Respect and follow Library Rules and Policies',
            'If any member misbehaves with library staff, their library membership will be cancelled',
          ],
        },
      ],
    },
    {
      title: 'SUBSCRIBED JOURNALS LIST',

      contents: [
        {
          type: 'bullets',
          title: '',
          items: [
          ],
        },

        { type: 'text', value: 'Indian Journal Of Finance' },
        { type: 'text', value: 'Prabandhan : Indian Journal Of Management' },
        { type: 'text', value: 'Arthshastra Indian Journal Of Economics & Research' },
        { type: 'text', value: 'Journal Of Commerce And Accounting Research' },
        { type: 'text', value: 'Journal Of Hospitality Application And Research' },

        { type: 'text', value: 'International Journal Of Hospitality And Tourism Systems' },
        { type: 'text', value: 'International Journal Of Banking, Risk And Insurance' },

        { type: 'text', value: 'International Journal Of Applied Marketing And Management' },
        { type: 'text', value: 'International Journal On Leadership' },

        { type: 'text', value: 'International Journal Of Business Ethics In Developing Economies' },
        { type: 'text', value: 'International Journal Of Distributed And Cloud Computing' },

        { type: 'text', value: 'International Journal Of Emerging Trends In Science And Technology' },

        { type: 'text', value: 'Journal Of Organization And Human Behaviour' },
        { type: 'text', value: 'Global Journal Of Finance And Management (GJFM)' },

        { type: 'text', value: 'International Journal Of Foreign Trade And International Business' },

        { type: 'text', value: '  The IUP Journal Of Accounting Research And Audit Practices' },
        { type: 'text', value: 'The IUP Journal Of Marketing Management' },

        { type: 'text', value: 'The IUP Journal Of Organizational Behaviour IUP Publications' },
        { type: 'text', value: 'Indian Journal Of Computer Science' },

        { type: 'text', value: 'Desidoc Jnl.Of Library & Information Technology' },
      ],
    },
    {
      title: 'FOR MORE INFORMATION',

      contents: [
        {
          type: 'bullets',
          title: 'How to use Web OPAC',
          items: [
          ],
        },
        { type: 'text', value: 'CONTACT US ' },
        {
          type: 'html',
          value:
            '<a href="mailto:librarian@theaims.ac.in" class="text-[#531675] font-semibold">Email: librarian@theaims.ac.in</a>',
        },
        {
          type: 'html',
          value:
            'Phone no.: <a href="tel:+919663051250" class="text-[#531675] font-semibold">9663051250</a>',
        },

      ],
    },
  ];

  return (
    <div className='lg:px-8 px-4'>
      <div className="container mx-auto py-12 grid md:grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Image Top on Tablet and Mobile */}
        <div className="relative w-full h-[300px] md:h-[350px] rounded-xl overflow-hidden lg:order-2 md:order-1">
          <Image
            src="/library-and-information-centre/quick-links-new.webp"
            alt="Library services"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Accordion Below Image */}
        <div className="lg:order-1 md:order-2">
          <h3 className="text-4xl font-bold text-[#0d2352] mb-6">Quick Links</h3>

          <div className="space-y-4">
            {links.map((link, index) => (
              <div key={index} className="border-b border-[#531675] pb-2">
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between text-left items-center text-lg font-medium text-black cursor-pointer"
                >
                  {link.title}
                  {openIndex === index ? (
                    <FaMinus className="text-[#531675]" />
                  ) : (
                    <FaPlus className="text-[#531675]" />
                  )}
                </button>

                {/* Accordion Body */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[1000px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="space-y-3">
                    {link.contents.map((item, i) => {
                      if (item.type === 'text') {
                        return (
                          <h5 key={i} className="">
                            {item.value}
                          </h5>
                        );
                      }
                      if (item.type === 'html') {
                        return (
                          <div
                            key={i}
                            className=""
                            dangerouslySetInnerHTML={{ __html: item.value }}
                          />
                        );
                      }
                      if (item.type === 'link') {
                        return (
                          <a
                            key={i}
                            href={item.href}
                            className="text-[#531675] font-semibold block"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.value}
                          </a>
                        );
                      }
                      if (item.type === 'table') {
                        return (
                          <table
                            key={i}
                            className="w-full text-sm border-collapse border border-gray-300 my-2"
                          >
                            <thead className="bg-gray-100">
                              <tr>
                                {item.headers.map((header, j) => (
                                  <th
                                    key={j}
                                    className="border border-gray-300 px-2 py-1 text-left"
                                  >
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {item.rows.map((row, rIdx) => (
                                <tr key={rIdx}>
                                  {row.map((cell, cIdx) => (
                                    <td
                                      key={cIdx}
                                      className="border border-gray-300 px-2 py-1"
                                    >
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        );
                      }
                      if (item.type === 'bullets') {
                        return (
                          <div key={i} className="mt-2">
                            <h5 className="font-semibold text-gray-800 mb-1" style={{ fontWeight: '600' }}>
                              {item.title}
                            </h5>
                            <ul
                              key={i}
                              className="list-disc list-outside pl-5 text-gray-700 text-sm space-y-1"
                            >
                              {item.items.map((point, pIdx) => (
                                <li style={{ fontSize: '16px' }} key={pIdx}>
                                  {point}
                                </li>
                              ))}
                            </ul>
                          </div>

                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Subscribe Button */}
          <div className="lg:pt-8 pt-5">
            <Subscribe />
          </div>

          <p className="pt-8 text-gray-800 text-sm text-center">
            Sign up with your email to receive login credentials for our digital platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
