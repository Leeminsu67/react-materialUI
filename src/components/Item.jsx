import { Favorite, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const Item = () => {
  return (
    <Card sx={{ margin: 3 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "red" }}>R</Avatar>}
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
        title="Shrip and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height={194}
        // image="https://i.ytimg.com/vi/k3jV6DMTCSE/maxresdefault.jpg"
        image="https://modulabs.co.kr/wp-content/uploads/2023/10/lautaro-andreani-xkBaqlcqeb4-unsplash-scaled.jpg"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          웹 브라우저가 웹사이트의 텍스트 문서를 읽어서 DOM(Document Object
          Model)이라는 트리 구조로 바꾸어 사용자에게 보여주게 되는데, 웹
          개발자들은 사용자의 반응에 따라 이 DOM 트리를 변경하여 웹사이트의
          내용을 갱신합니다. 하지만 매번 작은 변화가 있을 때마다 전체 화면을
          새로 그리는 것은 성능에 좋지 않습니다. React는 이 문제를 해결하기 위해
          Virtual DOM을 도입하였습니다. Virtual DOM은 실제 DOM의 복제본으로, 웹
          개발자들이 변화를 주고 싶은 부분만 Virtual DOM에서 수정하게 됩니다. 그
          후, React는 Virtual DOM과 실제 DOM 사이의 차이점을 찾아내어, 그
          차이점만 실제 DOM에 반영하게 됩니다. 불필요한 화면의 갱신을 최소화하여
          성능을 향상시키는 이 방법이 React 라는 라이브러리의 선택 이유라고
          생각됩니다.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <Favorite />
        </IconButton>
        <IconButton>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Item;
