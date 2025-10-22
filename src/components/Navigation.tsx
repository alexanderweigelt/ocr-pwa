import { Card } from "flowbite-react";

export default function Navigation() {
  const CARDS = [
    {
      title: "Docs",
      description: "Learn more about usage of OCR",
      url: "#docs",
      icon: (
        <svg
          className="h-9 w-9 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"
          />
        </svg>
      ),
    },
    {
      title: "Install",
      description: "Get started with OCR PWA (progressive web app)",
      url: "#installation",
      icon: (
        <svg
          className="h-9 w-9 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <nav className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
      {CARDS.map((card) => (
        <Card key={card.title} href={card.url} horizontal>
          <div className="flex items-center gap-6">
            <div className="flex flex-1 items-center gap-2">
              <div className="size-9">{card.icon}</div>

              <div className="flex flex-1 flex-col items-start justify-center gap-1.5 border-l border-gray-200 pl-3.5 dark:border-gray-700">
                <div className="w-full font-sans text-lg leading-4 font-semibold text-gray-900 dark:text-gray-200">
                  {card.title}
                </div>

                <div className="w-full font-sans text-sm leading-5 font-normal text-gray-500 dark:text-gray-400">
                  {card.description}
                </div>
              </div>
            </div>

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:text-primary-600 dark:group-hover:text-primary-500 h-6 w-6 text-gray-500 transition-transform group-hover:translate-x-1"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.2929 7.29289C14.6834 6.90237 15.3166 6.90237 15.7071 7.29289L19.7071 11.2929C19.8946 11.4804 20 11.7348 20 12C20 12.2652 19.8946 12.5196 19.7071 12.7071L15.7071 16.7071C15.3166 17.0976 14.6834 17.0976 14.2929 16.7071C13.9024 16.3166 13.9024 15.6834 14.2929 15.2929L16.5858 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H16.5858L14.2929 8.70711C13.9024 8.31658 13.9024 7.68342 14.2929 7.29289Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </Card>
      ))}
    </nav>
  );
}
