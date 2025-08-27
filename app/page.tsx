export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Ideas from: Voice-to-Code Generator
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          ```json
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
```
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="/auth" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Get Started
          </a>
          <a 
            href="/dashboard" 
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Dashboard
          </a>
        </div>
      </div>
    </main>
  )
}