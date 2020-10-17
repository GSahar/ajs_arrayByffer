export default class ArrayBufferConverter {
  constructor(data) {
    this.data = data;
  }

  getBuffer() {
    return ((input) => {
      const buffer = new ArrayBuffer(this.data.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < input.length; i += 1) {
        bufferView[i] = input.charCodeAt(i);
      }
      return buffer;
    })(this.data);
  }

  load(buffer) {
    const bufferView = new Uint16Array(buffer);

    return this.toString(bufferView);
  }

  toString(arrayBuffer) {
    return String.fromCharCode.apply(null, arrayBuffer);
  }
}
