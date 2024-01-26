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

```jsx
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

Sử dụng font

Thay vì dùng fontWeight như ví dụ trên giờ ta đã có font nên ta chuyển sang fontfamily

```jsx
import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo list</Text>
      <Button title="Click me" onPress={() => {}} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'coral',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    color: '#fff',
  },
});

```

Sử dụng biến môi trường cấu hình font

Tạo thư mục src - tạo thư mục constants - tạo file fontFamilies.ts

```js
export const fontFamilies = {
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  semiBold: 'Poppins-SemiBold',
  bold: 'Poppins-Bold',
};

```

Đặt màu thành biến colors.ts

Thằng TypeScript khác JavaScript ở chỗ, JS ko cần định nghĩa cho các cái biến của mình. Đối với TS thì phải định nghĩa

Các phần dùng chung ta nên để nó vào 1 component (global)

Container.tsx

```jsx
import {View, Text} from 'react-native';
import React, { ReactNode } from 'react';

interface Props {
    title?: string;
    back?: boolean;
    right?: ReactNode
    childern: ReactNode
}

const Container = (props: Props) => {
  const {title, back, right, children} = props;
  return (
    <ScrollView>
      {children}
    </ScrollView>
  );
};

export default Container;

```

Cắt nghĩa: 

Interface và mình nhận vào các Props

Nhận vào title "? là optional có thể có hoặc không" và kiểu dữ liệu của nó là string

Nhận vào nút "back" "? là optional có thể có hoặc không" và kiểu dữ liệu của nó là boolean

Nhận vào nút bên phải "right" "? là optional có thể có hoặc không" và kiểu dữ liệu của nó là reactNode

reactNode (kiểu dữ liệu chứa trong đó có thể là thẻ html hoặc, <></>, null, undefined)

Nhận vào childern và thằng này bắt buộc phải có nha. và kiểu dữ liệu của nó là reactNode.

Nhận vào props và kiểu của props là kiểu mình đã khai báo Props

Tiếp theo mình sẽ destructuring các thành phần bên trong props ra, để sau này ở dưới không cần phải props.title hay props.back,... mà chỉ cần gọi thẳng tên nó ra vì đã gán cho nó các tên biến tương ứng đồng thời trùng luôn.

Và trong ScrollView mình sẽ truyền thẳng children vào đấy. Nếu có chilren truyền thẳng vào đó luôn

Vì màn hình kéo lên kéo xuống được nên sẽ bỏ nó vào trong 1 scrollView

cũng sẽ có các component riêng của từng màn hình (local)


## Style chung:

Tạo folder styles. Tạo file globalStyles

```js
import {StyleSheet} from 'react-native';
import {colors} from '../constants/colors';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
});
```

Này là đại diện 1 file css global


# App

Ở trong App.tsx thường mình sẽ kiểm soát trạng thái người dùng. Không có làm giao diện ở đây. Mình sẽ để cái điều hướng ở đây. Router

Mình sẽ tạo ra 1 màn hình homes:

Tạo folder homes, tạo file HomeScreen

```js
import {View, Text} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

```

file App thay đổi

```js
import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import HomeScreen from './src/homes/HomeScreen';

const App = () => {
  return (
    <>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor="transparent"
      />
      <HomeScreen />
    </>
  );
};

export default App;

```

Cắt nghĩa: 

StatusBar: thanh trạng thái ở trên đầu

Thuộc tính này thiết lập thanh trạng thái (StatusBar) có phải là trong suốt hay không. Nếu được đặt thành true, thanh trạng thái sẽ là trong suốt, cho phép nền của màn hình xuất hiện qua thanh trạng thái. Nếu là false hoặc không có, thanh trạng thái sẽ không trong suốt.

transparent: độ trong suốt. Vì là backgroundColor Không có màu nền

Tại vì nền là màu đen nên: barStyle={'light-content'}


Chỉnh sửa HomeScreen.tsx

```js
import {View, Text} from 'react-native';
import React from 'react';
import Container from '../components/Container';

const HomeScreen = () => {
  return (
    <Container>
        <Text></Text>
    </Container>
  );
};

export default HomeScreen;
```
Cắt nghĩa

Text được xem là con của container vì container bọc nó, các thuộc tính mà được điền trong Thẻ Container dạng key value là thuộc về 1 cái props

props - thường sẽ là dạng key và value

Muốn sử dụng nhiều cái style custom trong 1 component thì bỏ nó vào trong mảng để quản lý.

```js
  <Container>
      <Text style={[globalStyles.text]} />
      <Text style={[globalStyles.text]} />
      <Text style={[globalStyles.text]} />
      <Text style={[globalStyles.text]} />
    </Container>
```

Vấn đề về giao diện

Trong Design của Mobile

Mỗi text nó sẽ chiếm hết chiều ngang của màn hình. Nó không được ngang hàng.

Để chia nó thành cột và ngang hàng thì xem ví dụ sau:

```js
 <View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'coral',
            margin: 10,
            width: '20%',
            height: 20,
          }}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: 'coral',
            margin: 10,
            width: '20%',
            height: 20,
          }}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: 'coral',
            marginHorizontal: 10,
            width: '20%',
            height: 20,
          }}
        />
      </View>
```

Nó sẽ tạo ra các view theo chiều dọc từ trên xuống dưới, và nó chỉ có 1 cột thôi.

Để mà 3 cái item này căn theo chiều ngang thuộc tính flex-direction

```js
<View style={{ flexDirection: 'row' }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'coral',
            margin: 10,
            width: '20%',
            height: 20,
          }}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: 'coral',
            margin: 10,
            width: '20%',
            height: 20,
          }}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: 'coral',
            marginHorizontal: 10,
            width: '20%',
            height: 20,
          }}
        />
      </>
```

Nhắc lại ReactNode nó kiểu dữ liệu là View, Icon, Text,...

Làm cái nằm trên 1 hàng kiểu custom

Mình sẽ định nghĩa ra 1 RowComponent

Khai báo

```js
interface Props {
  children: ReactNode;
  justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' | undefined;
}
```

Props là hứng dữ liệu mà thằng cha gửi xuống. Cha của RowComponent là HomeScreen

```js
// Cha đang thực hiện truyền xuống cho con props là justify
 <RowComponent justify="space-between">
        <Text style={[globalStyles.text]} />
        <Text style={[globalStyles.text]} />
 </RowComponent>
```

```js
// Con hứng props
const RowComponent = (props: Props) => {
  const {children, justify} = props;
  return (
    <View style={[
        globalStyles.row,
        {
            justifyContent: justify ?? 'center',
        },
    ]}>
      {children}
    </View>
  );
};

```

Mảng cho style cho phép quản lý nhiều Style trong 1 thẻ

Các style số 2 

justifyContent: justify ?? 'center',

Nếu mà justify không tồn tại (null hoặc undefined.) thì lấy giá trị mặc định center. Còn lại nếu có thì lấy giá trị đó.

Trong trường hợp tên props truyền xuống space-between nên là justifyContent sẽ là space-between


Bạn thấy mỗi lần mà bạn dùng text thì phải truyền style này kia rất phức tạp, mình tách nó ra thành 1 component nữa là textComponent

```js
/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {globalStyles} from '../styles/globalStyles';

interface Props {
  text: string;
  size?: number;
  font?: String;
}

const TextComponent = (props: Props) => {
  const {text} = props;
  return (
    <View>
      <Text style={globalStyles.text}>{text}</Text>
    </View>
  );
};

export default TextComponent;

```


Bên HomeScreen sẽ phải thay đổi

```js
/* eslint-disable prettier/prettier */
import React from 'react';
import Container from '../components/Container';
import RowComponent from '../components/RowComponent';
import SectionComponent from '../components/SectionComponent';
import TextComponent from '../components/TextComponent';

const HomeScreen = () => {
  return (
    <Container>
      <SectionComponent>
        <RowComponent justify="space-between">
          <TextComponent text="data"/>
          <TextComponent text="data"/>
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <TextComponent text="Hi, Jason"/>
        <TextComponent text="Be Productive today" size={20}/>
      </SectionComponent>
    </Container>
  );
};

export default HomeScreen;

```

và tất nhiên mỗi component được gọi có thể truyền css riêng cho nó vẫn được

---

Một chút các thay đổi tiếp theo

```js
const HomeScreen = () => {
  return (
    <Container>
      <SectionComponent>
        <RowComponent justify="space-between">
          <TextComponent text="data"/>
          <TextComponent text="data"/>
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <TextComponent text="Hi, Jason"/>
        <TitleComponent text="Be Productive today"/>
      </SectionComponent>
    </Container>
  );
};

```

Hiện tại mình có các component con 

Container, SectionComponent, RowComponent, TextComponent, TitleComponent

Các này mình có tái sử dụng cho chính các component khác cấp nhỏ hơn

Bổ sung thêm TitleComponent cũng tái sử dụng TextComponent bên trong nó.


---

## Làm phần Search

Search mà hiển thị cho trang home thực ra nó chỉ là button custom cho giống thanh search.

Khi click vào điều hướng người dùng đến trang search.

Mình đặt cho nó 1 section riêng ở trong HomeScreen

Rồi mình sẽ lại 1 chút cho RowCoponent

```js
/* eslint-disable prettier/prettier */
import {TouchableOpacity, View} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../styles/globalStyles';

interface Props {
  children: ReactNode;
  justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' | undefined;
  onPress?: () => void; // này định nghĩa function (người dùng bấm vào thực hiện hành động gì đó)
}

const RowComponent = (props: Props) => {
  const {children, justify, onPress} = props;
  return onPress ? <TouchableOpacity>
    {children}
  </TouchableOpacity> : (
    <View style={[
        globalStyles.row,
        {
            justifyContent: justify ?? 'center',
        },
    ]}>
      {children}
    </View>
  );
};

export default RowComponent;

```

Đoạn code có ý nghĩa Nếu à nó là onPress thì return về TouchableOpacity ngược lại không phải return về View Bình thường

## Cài đặt thêm Icon và xử lý Progress Bar

iconsax


crtl + shift + p "Nhập" Organize imports

Để bỏ qua hết các import nào không sử dụng