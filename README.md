# Next14

## 학습목표

- [ ] Next14
- [ ] App Router 출현배경
- [x] vs Page Router
  - [x] SSR
  - [x] define routes
  - [x] `layout.tsx`
  - [x] route groups
  - [x] meta data
- [x] RSC

### vs Next 12 (Page Router)

- `app/*/page.tsx`를 통해 route를 정의한다.
  - pathparam을 기준으로 폴더를 생성해서 각각의 폴더에 page.tsx를 만들어줘야한다.
  - 폴더명을 괄호로 감싸서 route group 기능을 사용할 수 있다.
    - 별도의 url을 만들지 않는다.
- 페이지 라우터에서는 HTTP status로 파일명으로 생성하면 되었었는데, 새롭게 맵핑된 이름으로 페이지를 만들어줘야 한다 ㅡㅡ
  - `404.tsx` &rarr; `not-found.tsx`
- app router에서는 기본적으로 모두 SSR을 진행한다.
  - `use client`를 통해 하이드레이션 여부를 결정할 수 있다.
    - 실제로는 app router 내부 컴포넌트는 Next에서 모두 SSR 하기 때문에, **_사실상 use hydrate이다......_**
  - 즉, use client를 작성하지 않은 app router의 컴포넌트는 모두 RSC이기 때문에 클라이언트 사이드에서 별도의 하이드레이션을 진행하지 않는다.
  - 각 SSR 엔드포인트에 대해 자체적으로 캐싱한다.
- 별도의 `layout.tsx` 파일이 없으면 root의 layout을 무조건 통하게 된다.
  - page.tsx처럼 패스 파람 기준으로 별도의 layout.tsx를 만들어 줄 수 있다.
    - 단, 대체가 아닌 네스팅 되어 중첩으로 렌더링된다.
      - **_metadata는 중첩이 아닌 병합된다._**
      - 협업시 계층에 대한 컨벤션 정의가 매우 어려울것 같다.
- 기존 `/api/*`를 통해 만들 수 있던 커스텀 서버는 `route.ts`를 통해 만들 수 있다.
  - 함수명을 Get으로 작성하면 된다.
- `loading.tsx`를 통해 스트리밍에 대한 로딩을 처리할 수 있다.
- 별도의 에러바운더리 없이 `error.tsx`를 통해 스트리밍에 대한 에러처리를 할 수 있다.
  - 단, `use client`와 함께 사용해야한다.

## TODO

- [ ] 공식 문서에서 Metadata 객체가 제공하는 다양한 옵션들 확인하기
