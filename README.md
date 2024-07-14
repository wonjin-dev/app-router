# Next14

## 학습목표

- [ ] Next14
- [ ] App Router 출현배경
- [x] vs Page Router
  - [x] define routes
  - [x] SSR
- [x] RSC

### vs Next 12 (Page Router)

- `app/*/page.tsx`를 통해 route를 정의한다.
  - pathparam을 기준으로 폴더를 생성해서 각각의 폴더에 page.tsx를 만들어줘야한다.
- 페이지 라우터에서는 HTTP status로 파일명으로 생성하면 되었었는데, 새롭게 맵핑된 이름으로 페이지를 만들어줘야 한다 ㅡㅡ
  - `404.tsx` &rarr; `not-found.tsx`
- app router에서는 기본적으로 모두 SSR을 진행한다.
  - `use client`를 통해 하이드레이션 여부를 결정할 수 있다.
    - 실제로는 app router 내부 컴포넌트는 Next에서 모두 SSR 하기 때문에, **_사실상 use hydrate이다......_**
  - 즉, use client를 작성하지 않은 app router의 컴포넌트는 모두 RSC이기 때문에 클라이언트 사이드에서 별도의 하이드레이션을 진행하지 않는다.
