# Giới thiệu về react native và làm dự án todo list

## Giới thiệu tổng quát và cài đặt

### Câu lệnh cài đặt

npx react-native init ten_cua_du_an --template react-native-template-typescript

### Giới thiệu các file trong dự án

React native nó cũng khá giống với react

file index.js (khởi tạo nguyên cái dự án của mình);

App.tsx sẽ là màn hình mà ta sẽ làm việc. chuyển hóa xong qua index.js

Rất giống react là chỉ có 1 trang duy nhất. Điện thoại nó cũng chỉ di nhất một màn hình. Chỉ thay đổi nội dung trên trang hoặc màn hình đó.

2 thư mục này chuyên để chạy cho android hoặc ios

node_modules (nơi quản lý các thư viện) Chẳng hạn thư viện camera, thư viện thời gian, notification

package.json (quản lý các tên các thư viện mà ta đã cài)

Nói chung mọi thứ ta sẽ code trên App.tsx

dependencies: chứa các tên thư viện đó và các thư viện này sẽ xuất hiện trong lúc ta đưa nó ra cho người dùng trải nghiệm.

dev dependencies: nơi chứa các tên thư viện và thư viện này chỉ xuất hiện trên môi trường dev thôi.

Trong dự án lần này sẽ code bằng TS

## Bắt đầu dự án:

tạo nhanh cấu trúc sẵn cho 1 component: rnfe

Trong react native chỉ có View và Text, không có div section,... như HTML5

style inline react native:

```tsx
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
       <Text style={styles.title}>Todo list</Text>
       <Button title="Click me" onPress={() => {}} /> 
       <Text style={{ color: "#fafafa", fontSize: 18 }}>Hello</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, // chiếm toàn bộ màn hình
    backgroundColor: 'coral',
    justifyContent: 'center', // canh ra giữa (trục ox)
    alignItems: 'center', // canh ra giữa (trục oy)
  },

   title: {
    fontWeight: '700', // độ mập của chữ
    fontSize: 32, // chiều cao chữ
    color: '#fff', // màu sắc
  },
});

```

Để ý thấy style này được trình bày dưới dạng object

Tất cả những gì là string phải nằm trong thẻ Text

Button là 1 cái thư viện có sẵn trong React, title truyền value vào để hiển thị trên button, onPress sự kiện nhấn, click vào thì callback arrowfunction được thực thi

style inline: 

```jsx
<Text style={{ color: "#fafafa", fontSize: 18 }}>Hello</Text>
```

```jsx
style={{  }}
```

## Thêm font tuỳ chỉnh vào ứng dụng React Native

Thêm font tùy chỉnh thay vì sử form của máy.

tạo foler assets (nơi sẽ lưu trữ hình ảnh, font chữ,...)

Cấu hình lại trong react

Tạo file: react-native.config.js

Lý do không dùng expo, khó can thiệp xâu vào trong cấu hình android cấu hình như nào, ios cấu hình như nào, build chậm hơn

asserts: [] trong react-native.config.js nơi cấu hình đường link tới assets tới fonts






