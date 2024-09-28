export interface App {
  id: string;
  title: string;
  iconURL: string;
  feedbackUrl: string;
  iosAppStoreUrl?: string;
  androidGooglePlayUrl?: string;
  description: string;
  features?: Feature[];
  ppURL: string;
}
export const APP_LIST: App[] = [
  {
    id: 'mind.compound.calculator',
    title: 'Financial Calculator',
    iconURL: 'assets/img/fv-cal-logo.png',
    iosAppStoreUrl:
      'https://apps.apple.com/us/app/future-value-calculator/id1642215165',
    androidGooglePlayUrl:
      'https://play.google.com/store/apps/details?id=mind.compound.calculator',
    feedbackUrl: 'https://forms.gle/XYoE7yGptVCobnYN8',
    description: 'Currency Converter & Compound Interest Calculator',
    ppURL:
      'https://kgergooo.github.io/about/compound-interest-calc-android-ios-privacy-policy.html',
  },
  {
    id: 'mind.narro.reader',
    title: 'Narro Reader',
    iconURL: 'assets/img/narro-logo.png',
    iosAppStoreUrl: '',
    androidGooglePlayUrl: '',
    ppURL:
      'https://kgergooo.github.io/about/narro-reader.android-ios-privacy-policy.html',
    feedbackUrl:
      'https://docs.google.com/forms/d/1m8c76_OAWheXFVPWLIMI5OWmDjvx926wWmswwgJ8-TA/edit',
    description:
      "Easily convert text to speech with our simple but powerful app. It lets you read PDF and DOCX documents, images (with optical character recognition), web pages, and text from your phone's clipboard. You can also translate content and have it read aloud in different languages. A helpful tool for anyone looking to listen to their documents, images, and web content on the go.",
    features: [
      {
        title: 'PDF and Docx Support',
        description:
          'PDF and Docx formats are supported. When you open a PDF document containing scanned pages (images), the application will automatically recognize the content of each page, allowing you to listen to it.',
      },
      {
        title: 'Scans',
        description:
          'You can use your camera or upload an image from your gallery, and our OCR (Optical Character Recognition) tool will automatically detect the text in the image. In the settings, you can enable the auto-read feature, which will start the text-to-speech function automatically. This feature is especially helpful for people with disabilities.',
      },
      {
        title: 'Paste from Clipboard or URLs',
        description:
          "Sometimes it's easier to copy and paste a long text to quickly convert it into audio, which can be helpful for those who prefer listening to content. <br /> You can also paste a URL, and the app will automatically detect and fetch the content from the article or webpage. Keep in mind, due to the way some websites are built, it may not always be possible to retrieve content because of various server-side rendering methods. We appreciate your understanding if we're unable to load certain web links",
      },
      {
        title: 'Translation',
        description:
          "Our translation feature allows you to convert content into a different language so you can listen to foreign texts in your preferred language. In the main settings, you can set a default language, so you don't have to choose it manually for each document.",
      },
      {
        title: 'Language Auto-Detection',
        description:
          'Whenever you open new content (Books, Scans, or Web Articles), Narro Reader will attempt to detect the language and automatically set both the reading language and the source translation language.',
      },
    ],
  },
];

export interface Feature {
  title: string;
  description: string;
}
