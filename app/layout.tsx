import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Voice-to-Code Generator',
  description: '```json
[
  {
    "title": "Voice-Driven API Builder",
    "description": "أداة تتيح للمطورين إنشاء واجهات برمجة التطبيقات (APIs) باستخدام الأوامر الصوتية، مما يسهل عملية تطوير التطبيقات.",
    "mvp_plan": "استخدام مكتبة تحويل الصوت إلى نص لإنشاء واجهة بسيطة. دمج مكتبات لإنشاء API وتوليد الكود بناءً على الأوامر الصوتية. اختبار الأداة مع مجموعة صغيرة من المطورين."
  },
  {
    "title": "Voice-Based Code Review Assistant",
    "description": "أداة تستخدم الذكاء الاصطناعي لتحليل الشيفرة المصدرية وتقديم تعليقات وتحسينات بناءً على الأوامر الصوتية.",
    "mvp_plan": "تطوير نموذج أولي بسيط باستخدام مكتبة تحليل الشيفرة ومكتبة تحويل الصوت إلى نص. بناء واجهة تفاعلية تسمح للمستخدمين بإدخال أوامر صوتية واستقبال التعليقات. إجراء اختبارات مع مجموعة من المطورين."
  },
  {
    "title": "Voice Command Debugger",
    "description": "أداة تسمح للمطورين بتصحيح الأخطاء في الشيفرة باستخدام الأوامر الصوتية، مما يسهل عملية تصحيح الأخطاء.",
    "mvp_plan": "إنشاء واجهة مستخدم بسيطة مع دعم للأوامر الصوتية. دمج أدوات تصحيح الأخطاء الموجودة واستخدام الذكاء الاصطناعي لتفسير الأوامر الصوتية. إجراء اختبارات مع مجموعة من المطورين للحصول على ملاحظات."
  }
]
```',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}