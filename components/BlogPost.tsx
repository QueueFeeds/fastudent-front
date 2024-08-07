// components/BlogPost.tsx
export default function BlogPost() {
  return (
    <div className="flex-1 w-full flex flex-col items-start justify-start text-left text-fastu-black overflow-y-auto">
      <div className="self-stretch flex flex-col items-start justify-start py-4 px-6">
        <div className="w-full flex flex-row items-center justify-start gap-2">
          <img
            className="w-4 h-4 rounded-full object-cover"
            alt=""
            src="/Ellipse 91.png"
          />
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row items-center justify-start gap-2">
              <div className="tracking-[-0.02em] font-medium">
                우아한테크블로그
              </div>
              <div className="tracking-[-0.02em] font-medium text-fastu-gray2">
                <span>{`업로드 `}</span>
                <span className="text-chocolate">30분</span>
                <span> 경과</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row items-start justify-start gap-3 text-base text-black mt-4">
          <div className="flex-1 flex flex-col items-start justify-start gap-1.5">
            <div className="tracking-[-0.02em]">
              업무용 툴, 내 동료가 정말 만족했나요?
            </div>
            <div className="text-sm tracking-[-0.02em] text-fastu-gray2">
              토스의 데이터 직군이 매일 쓰는 서비스의 만족도를 1점 끌어올리기
              위해 10개월간 집요하게 파고든 과정을 소개할게요
            </div>
          </div>
          <img
            className="w-[72px] h-[72px] object-cover"
            alt=""
            src="/Ellipse 91.png"
          />
        </div>
      </div>
    </div>
  );
}
