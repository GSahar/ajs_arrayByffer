import ArrayBufferConverter from '../basic';

test('ArrayBuffer 1', () => {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

  const loader = new ArrayBufferConverter(data);

  const result = loader.load(loader.getBuffer());

  expect(result).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});


test('ArrayBuffer 2', () => {
  const data = 'парам пам пам';

  const loader = new ArrayBufferConverter(data);

  const result = loader.load(loader.getBuffer());

  expect(result).toEqual('парам пам пам');
});
