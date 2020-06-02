## 0530수업

- 🥊🥊 복습 완료! 🥊🥊
  
- 🥊🥊 과제: 수정하기 버튼 추가 완료! 🥊🥊
  

--- 
### 과제 피드백
1. `if else`문 대신 삼항 연산자를 이용해 코드를 간결히 작성하자. 
2. `filter()` 메서드 자체가 기존 배열의 변경없이 새로운 배열을 반환해주므로(**불변성 유지**) `...`와 같은 스프레드 연산자로 다시 복사할 필요가 없다.
3. 값의 일부분을 바꿔야하는 것이 아니라 기존 값은 그대로인 채, 일치하는 요소를 찾기만 하면 되는 것이므로 `filter()` 메서드보다는 `find()` 메서드가 더 적합하다.
- `filter()`:  주어진 함수를 만족하는 모든 요소를 모아 새로운 **배열로 반환**한다.
- `find()`: 주어진 함수를 만족하는 첫 번째 요소의 **값을 반환**한다.

```javascript
handleShowForm = id => {
  const { list } = this.state;
  this.setState({
      // if else절 -> 삼항 연산자
      list: list.map(user => 
        user.id === id ? {...user, isShow: !user.isShow} : {...user, isShow: false}
      ),
      // 수정 전엔 filter가 반환한 배열을 다시 객체로 바꾼다고 난리난리였는데 find를 쓰니까 세상 이렇게 간단할 수가... 
      selectUser: list.find(user => user.id === id)
  });
};
```


4. 아래와 같이 input에 의한 에러가 발생한다😱!
> Warning: A component is changing an uncontrolled input of type undefined to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component   

`state = {selectUser: {}}`로 했는데 input에서 value로 `.password`등을 조회하고 있기 때문이라는데...!   
처음 렌더될 때는 selectUser에 username이랑 password속성이 없다가 나중에 이벤트 핸들러에서 추가되는 거라 그런 건가보다!!!     
이 때는 **input 태그의 value에 기본값**을 넣어주면 된다. 

```javascript
<input name="username" value={selectUser.username || ''} onChange={this.handleEditChange}></input>
```

