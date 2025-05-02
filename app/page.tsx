import { Button } from "@/components/ui/button"
import Hero from "@/components/hero"

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">關於 Creamory</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                Creamory 是專為兒童設計的烘焙體驗課程，我們相信透過烘焙，孩子們可以學習耐心、創意思考和團隊合作。
              </p>
              <p className="text-lg mb-6">
                我們的課程由專業烘焙師傅帶領，使用安全、優質的食材，讓孩子們在愉快的氛圍中學習烘焙技巧。
              </p>
              <p className="text-lg">
                每個孩子都能在 Creamory 發揮創意，製作出獨一無二的甜點作品，並帶著成就感和美好回憶回家。
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src="/placeholder.svg?height=600&width=800" alt="兒童烘焙課程" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">課程介紹</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Course Card 1 */}
            <div className="bg-[#fff9f9] rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="蛋糕裝飾課程"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#e77c7c]">蛋糕裝飾課程</h3>
                <p className="mb-4">學習基本的蛋糕裝飾技巧，包括奶油霜製作、擠花和簡單的造型設計。</p>
                <p className="text-sm text-gray-600">適合年齡：6-12歲</p>
                <p className="text-sm text-gray-600">課程時長：2小時</p>
              </div>
            </div>

            {/* Course Card 2 */}
            <div className="bg-[#fff9f9] rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="餅乾製作課程"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#e77c7c]">餅乾製作課程</h3>
                <p className="mb-4">從麵團製作到烘烤，學習製作各種造型的餅乾，並進行創意裝飾。</p>
                <p className="text-sm text-gray-600">適合年齡：5-12歲</p>
                <p className="text-sm text-gray-600">課程時長：2.5小時</p>
              </div>
            </div>

            {/* Course Card 3 */}
            <div className="bg-[#fff9f9] rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="巧克力工藝課程"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#e77c7c]">巧克力工藝課程</h3>
                <p className="mb-4">探索巧克力的奧秘，學習溫度控制、模具使用和創意巧克力製作。</p>
                <p className="text-sm text-gray-600">適合年齡：7-12歲</p>
                <p className="text-sm text-gray-600">課程時長：3小時</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">課程時間表</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-[#e77c7c] text-white">
                <tr>
                  <th className="py-4 px-6 text-left">課程</th>
                  <th className="py-4 px-6 text-left">日期</th>
                  <th className="py-4 px-6 text-left">時間</th>
                  <th className="py-4 px-6 text-left">名額</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6">蛋糕裝飾課程</td>
                  <td className="py-4 px-6">每週六</td>
                  <td className="py-4 px-6">10:00 - 12:00</td>
                  <td className="py-4 px-6">10人</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6">餅乾製作課程</td>
                  <td className="py-4 px-6">每週日</td>
                  <td className="py-4 px-6">14:00 - 16:30</td>
                  <td className="py-4 px-6">12人</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6">巧克力工藝課程</td>
                  <td className="py-4 px-6">每週六</td>
                  <td className="py-4 px-6">14:00 - 17:00</td>
                  <td className="py-4 px-6">8人</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">聯絡我們</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">預約課程</h3>
              <p className="mb-6">填寫以下表格預約課程，或透過電話與我們聯繫。我們將在24小時內回覆您。</p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="font-bold mr-2">地址：</span>
                  台北市信義區松仁路100號
                </p>
                <p className="flex items-center">
                  <span className="font-bold mr-2">電話：</span>
                  02-1234-5678
                </p>
                <p className="flex items-center">
                  <span className="font-bold mr-2">Email：</span>
                  info@creamory.com
                </p>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e77c7c]"
                  placeholder="請輸入您的姓名"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e77c7c]"
                  placeholder="請輸入您的Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">
                  電話
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e77c7c]"
                  placeholder="請輸入您的電話"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  訊息
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e77c7c]"
                  placeholder="請輸入您的訊息"
                ></textarea>
              </div>
              <Button className="bg-[#e77c7c] hover:bg-[#d66c6c] text-white px-6 py-2 rounded-md">送出</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4a3e3e] text-white py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Creamory</h3>
              <p>為兒童提供有趣、安全、創意的烘焙體驗課程，讓每個孩子都能享受烘焙的樂趣。</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">營業時間</h3>
              <p>週二至週五：13:00 - 19:00</p>
              <p>週六至週日：10:00 - 19:00</p>
              <p>週一：休息</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">追蹤我們</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#e77c7c]">
                  Facebook
                </a>
                <a href="#" className="hover:text-[#e77c7c]">
                  Instagram
                </a>
                <a href="#" className="hover:text-[#e77c7c]">
                  YouTube
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Creamory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
