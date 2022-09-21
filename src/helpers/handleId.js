const handleId = (id) => {
  if (id < 10) {
    return `#00${id}`;
  }
  if (id >= 10 && id < 100) {
    return `#0${id}`;
  }
  if (id >= 100) {
    return `#${id}`;
  }
}

export default handleId;
