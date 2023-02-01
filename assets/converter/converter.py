import os

iterations = 0
for file_name in os.listdir('convert'):
    iterations += 1
    output_name = file_name.split('.',1)[0]
    os.system(f'cmd /c "magick convert\{file_name} output\{output_name}.avif"')
    os.system(f'cmd /c "magick convert\{file_name} output\{output_name}.webp"')
    try:
        os.remove(f'convert\{file_name}')
    except Exception as e:
        print("Exception occurred " + repr(e))

input(f'{iterations} files converted.')